import { stringBody } from "../../http-body/helpers";
import { res } from "../helpers";
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
    const request = res({ status: HttpStatus.OK });

    expect(request.body).toEqual(stringBody(""));
    expect(request.headers).toEqual({});
  });

  test("res should instantiate a StringBody when a string is passed as body", () => {
    const expectedBody = stringBody("some-body");

    const resp1 = res({ status: HttpStatus.OK, body: "some-body" });
    const resp2 = res({
      status: HttpStatus.OK,
      body: stringBody("some-body")
    });

    expect(resp1.body).toEqual(expectedBody);
    expect(resp2.body).toEqual(expectedBody);
  });
});
