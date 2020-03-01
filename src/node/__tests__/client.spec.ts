import { HttpHandler } from "../../core/http4ts";
import { req, HttpMethods, res, HttpStatus, stringBody } from "../../core/mod";
import { send } from "../client";
import { runOnTestServer } from "../test-utils";

describe("node http client", () => {
  it("should send the request to server", async () => {
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
      expect(await req.body.asString()).toEqual(
        await expectedReq.body.asString()
      );
      expect(req.headers.authorizarion).toEqual(
        expectedReq.headers.authorizarion
      );
      expect(req.url).toEqual(new URL(expectedReq.url).pathname);
      expect(req.method).toEqual(expectedReq.method);

      return expectedRes;
    };

    await runOnTestServer(8181, handler, async () => {
      const response = await send(expectedReq);

      expect(await response.body.asString()).toEqual(
        await expectedRes.body.asString()
      );
      expect(response.headers.authorizarion).toBe(
        expectedRes.headers.authorization
      );
      expect(response.status).toBe(expectedRes.status);
    });
  });
});
