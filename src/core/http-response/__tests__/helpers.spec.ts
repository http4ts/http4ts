import { stringBody } from "../../http-body/helpers";
import { res, OK } from "../helpers";
import { HttpStatus } from "../../../node";

describe("HttpResponseImpl helpers", () => {
  test("res should return an HttpResponseImpl wtesth provided parameters", () => {
    const params = {
      status: HttpStatus.ACCEPTED,
      body: stringBody("sample body"),
      headers: { Authorizarion: "Bypass" }
    };
    const request = res(params);

    expect(request.body).toEqual(params.body);
    expect(request.headers).toEqual(params.headers);
    expect(request.status).toEqual(params.status);
  });

  test("res should properly set default parameters", () => {
    const request = OK();

    expect(request.body).toEqual(stringBody(""));
    expect(request.headers).toEqual({});
  });

  test("res should instantiate a StringBody when a string is passed as body", () => {
    const expectedBody = stringBody("some-body");

    const resp1 = OK({ body: "some-body" });
    const resp2 = OK({ body: stringBody("some-body") });

    expect(resp1.body).toEqual(expectedBody);
    expect(resp2.body).toEqual(expectedBody);
  });
});
