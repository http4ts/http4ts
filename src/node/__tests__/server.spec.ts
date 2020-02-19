import * as http from "http";
import { get, post } from "request-promise";
import { HttpResponse } from "../../core/http";
import { toNodeRequestListener } from "../server";
import { HttpHandler } from "../../core/http4ts";
import { BufferedBody } from "../../core/http-body/buffered-body";
import { jsonBody, stringBody } from "../../core/http-body/helpers";
import { res } from "../../core/http-response/helpers";

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
        return res({
          body: jsonBody({ test: "test" }),
          headers: { "Content-Type": "application/json" },
          status: 200
        });
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
        const response = res({
          body: stringBody("1 second passed!"),
          status: 200,
          headers: {}
        });
        setTimeout(() => resolve(response), 100);
      });
    };

    await runOnTestServer(handler, async () => {
      const response = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual("1 second passed!");
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
        const response = res({
          body: new BufferedBody(bodyGenerator()),
          status: 200,
          headers: {}
        });
        setTimeout(() => resolve(response), 100);
      });
    };

    await runOnTestServer(handler, async () => {
      const response = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual("Hello");
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
        const response = res({
          body: new BufferedBody(bodyGenerator()),
          status: 200,
          headers: {}
        });
        setTimeout(() => resolve(response), 100);
      });
    };

    await runOnTestServer(handler, async () => {
      const response = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      // Since the error happens after setting the response statusCode and headers, we don't see 500 in statusCode
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual("He");
    });
  });

  it("should handle requests with unicode body", async () => {
    const handler: HttpHandler = async req => {
      expect(await req.body.asString()).toEqual("Hello 😌");
      return res({
        body: stringBody("Bye 😌"),
        headers: {},
        status: 200
      });
    };

    await runOnTestServer(handler, async () => {
      const response = await post("http://localhost:8080/", {
        body: "Hello 😌",
        simple: false,
        resolveWithFullResponse: true
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual("Bye 😌");
    });
  });
});
