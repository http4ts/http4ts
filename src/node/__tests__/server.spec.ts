import * as http from "http";
import { get } from "request-promise";
import { HttpResponse } from "../../core/http";
import { toNodeRequestListener } from "../server";
import { HttpHandler } from "../../core/http4ts";
import { HttpBodyImpl, jsonBody } from "../../core/HttpBodyImpl";

async function runOnTestServer(
  handler: HttpHandler,
  testBlock: () => Promise<void>
) {
  const server = http.createServer(toNodeRequestListener(handler));

  return new Promise((resolve, reject) => {
    server.listen(8080, "127.0.0.1", () => {
      testBlock()
        .then(resolve)
        .catch(error => {
          console.error(error.message);
          reject(error);
        })
        .finally(() => server.close());
    });
  });
}

describe("node server binding", () => {
  it("should respond correctly when handler throws", async () => {
    const handler: HttpHandler = () => {
      throw new Error("an error occured. (Don't worry. this is expected)");
    };

    await runOnTestServer(handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(500);
    });
  });

  it("should handle more complext handlers", async () => {
    const handler: HttpHandler = req => {
      if (req.method == "GET") {
        return {
          body: jsonBody({ test: "test" }),
          headers: { "Content-Type": "application/json" },
          status: 200
        };
      }

      throw new Error("Should never happen!");
    };

    await runOnTestServer(handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(200);
      expect(res.headers).toHaveProperty("content-type", "application/json");
      expect(res.body).toEqual(JSON.stringify({ test: "test" }));
    });
  });

  it("should handle handers which return promises", async () => {
    const handler: HttpHandler = async () => {
      return new Promise<HttpResponse>(resolve => {
        const res = {
          body: HttpBodyImpl.fromString("1 second passed!"),
          status: 200,
          headers: {}
        };
        setTimeout(() => resolve(res), 1000);
      });
    };

    await runOnTestServer(handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual("1 second passed!");
    });
  });

  it("should handle bodies as async iterator", async () => {
    async function* bodyGenerator() {
      const data = Array.from(Array(5)).map((v, i) => "Hello".charCodeAt(i));

      for (const el of data) {
        yield new Uint8Array([el]);
      }
    }

    const handler: HttpHandler = async () => {
      return new Promise<HttpResponse>(resolve => {
        const res = {
          body: new HttpBodyImpl(bodyGenerator()),
          status: 200,
          headers: {}
        };
        setTimeout(() => resolve(res), 1000);
      });
    };

    await runOnTestServer(handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual("Hello");
    });
  });

  it("should handle iterator errors correctly", async () => {
    async function* bodyGenerator() {
      const data = Array.from(Array(5)).map((v, i) => "Hello".charCodeAt(i));

      for (const el of data) {
        if (el === 108) {
          throw new Error(
            "Failed to continue sending data to iterator. (this is expected)."
          );
        }
        yield new Uint8Array([el]);
      }
    }

    const handler: HttpHandler = async () => {
      return new Promise<HttpResponse>(resolve => {
        const res = {
          body: new HttpBodyImpl(bodyGenerator()),
          status: 200,
          headers: {}
        };
        setTimeout(() => resolve(res), 1000);
      });
    };

    await runOnTestServer(handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      // Since the error happens after setting the response statusCode and headers, we don't see 500 in statusCode
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual("He");
    });
  });
});
