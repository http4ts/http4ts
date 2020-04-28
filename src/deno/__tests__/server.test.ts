import { asserts } from "../imports.ts";
import { test, runOnTestServer } from "./test-utils.ts";
import {
  HttpHandler,
  res,
  jsonBody,
  HttpResponse,
  BufferedBody
} from "../core/mod.ts";

test("should respond correctly when handler throws", async () => {
  const handler: HttpHandler = () => {
    throw new Error("an error occured. (Don't worry. this is expected)");
  };

  await runOnTestServer(8080, handler, async fetch => {
    const resp = await fetch("http://localhost:8080");

    asserts.equal(resp.status, 500);
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

  await runOnTestServer(8080, handler, async fetch => {
    const res = await fetch("http://localhost:8080/");

    asserts.equal(res.status, 200);
    asserts.assert(res.headers.get("content-type") === "application/json");
    asserts.equal(await res.text(), JSON.stringify({ test: "test" }));
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

  await runOnTestServer(8080, handler, async fetch => {
    const response = await fetch("http://localhost:8080/");

    asserts.equal(response.status, 200);
    asserts.equal(await response.text(), "1 second passed!");
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

  await runOnTestServer(8080, handler, async fetch => {
    const response = await fetch("http://localhost:8080/");

    asserts.equal(response.status, 200);
    asserts.equal(await response.text(), "Hello");
  });
});

// BUG: This doesn't work as expected
test.skip("should handle iterator errors correctly", async () => {
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

  await runOnTestServer(8080, handler, async fetch => {
    const response = await fetch("http://localhost:8080/");

    // Since the error happens after setting the response statusCode and headers, we don't see 500 in statusCode
    asserts.equal(response.status, 200);
    asserts.equal(await response.text(), "He");
  });
});

test("should handle requests with unicode body", async () => {
  const handler: HttpHandler = async req => {
    asserts.equal(await req.body.asString(), "Hello 😌");
    return res({
      body: "Bye 😌",
      headers: {},
      status: 200
    });
  };

  await runOnTestServer(8080, handler, async fetch => {
    const response = await fetch("http://localhost:8080/", {
      body: "Hello 😌",
      method: "POST"
    });

    asserts.equal(response.status, 200);
    asserts.equal(await response.text(), "Bye 😌");
  });
});
