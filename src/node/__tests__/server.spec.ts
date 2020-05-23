import { get, post } from "request-promise";
import { HttpResponse } from "../../core/http";
import { HttpHandler } from "../../core/http4ts";
import { BufferedBody } from "../../core/http-body/buffered-body";
import { jsonBody } from "../../core/http-body/helpers";
import { res } from "../../core/http-response/helpers";
import { runOnTestServer } from "../test-utils";

describe("node server binding", () => {
  test("should respond correctly when handler throws", async () => {
    const handler: HttpHandler = () => {
      throw new Error("an error occured. (Don't worry. this is expected)");
    };

    await runOnTestServer(8080, handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(500);
    });
  });

  test("should handle more complext handlers", async () => {
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

    await runOnTestServer(8080, handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(200);
      expect(res.headers).toHaveProperty("content-type", "application/json");
      expect(res.body).toEqual(JSON.stringify({ test: "test" }));
    });
  });

  test("should handle handers which return promises", async () => {
    const handler: HttpHandler = async () => {
      return new Promise<HttpResponse>(resolve => {
        const response = res({
          body: "1 second passed!",
          status: 200,
          headers: {}
        });
        setTimeout(() => resolve(response), 100);
      });
    };

    await runOnTestServer(8080, handler, async () => {
      const response = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual("1 second passed!");
    });
  });

  test("should handle bodies as async iterator", async () => {
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

    await runOnTestServer(8080, handler, async () => {
      const response = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual("Hello");
    });
  });

  test("should handle iterator errors correctly", async () => {
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

    await runOnTestServer(8080, handler, async () => {
      const response = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      // Since the error happens after setting the response statusCode and headers, we don't see 500 in statusCode
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual("He");
    });
  });

  test("should handle requests with unicode body", async () => {
    const handler: HttpHandler = async req => {
      expect(await req.body.asString()).toEqual("Hello 😌");
      return res({
        body: "Bye 😌",
        headers: {},
        status: 200
      });
    };

    await runOnTestServer(8080, handler, async () => {
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
