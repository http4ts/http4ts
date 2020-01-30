import { HttpMethods } from "../../http";
import { stringBody } from "../../http-body/helpers";
import { res } from "../helpers";
import { HttpStatus } from "../../../node";

describe("HttpResponseImpl helpers", () => {
  it("should retun an HttpResponseImpl with provided parameters", () => {
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

  it("should properly set default parameters", () => {
    const request = res({ status: HttpStatus.OK });

    expect(request.body).toEqual(stringBody(""));
    expect(request.headers).toEqual({});
  });
});
