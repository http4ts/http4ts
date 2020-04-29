import {
  HttpHandler,
  req,
  HttpMethods,
  res,
  HttpStatus,
  stringBody
} from "../core/mod.ts";
import { send } from "../client.ts";
import { runOnTestServer, test } from "./test-utils.ts";
import { asserts } from "../imports.ts";

test("Deno http client - should send the request to server", async () => {
  const expectedReq = req({
    url: "http://localhost:8181",
    body: "Hello World 😌",
    headers: {
      authorizarion: "token my-token"
    },
    method: HttpMethods.POST
  });
  const expectedRes = res({
    status: HttpStatus.ACCEPTED,
    body: stringBody("Hi there 😌"),
    headers: {
      "custom-header": "custom header value"
    }
  });

  const handler: HttpHandler = async req => {
    asserts.equal(await req.body.asString(), await expectedReq.body.asString());
    asserts.equal(req.headers.authorizarion, expectedReq.headers.authorizarion);
    asserts.equal(req.url, new URL(expectedReq.url).pathname);
    asserts.equal(req.method, expectedReq.method);

    return expectedRes;
  };

  await runOnTestServer(8181, handler, async () => {
    const response = await send(expectedReq);

    asserts.equal(
      await response.body.asString(),
      await expectedRes.body.asString()
    );
    asserts.equal(
      response.headers.authorizarion,
      expectedRes.headers.authorization
    );
    asserts.equal(response.status, expectedRes.status);
  });
});
