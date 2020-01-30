import { HttpMethods } from "../../http";
import { stringBody } from "../../http-body/helpers";
import { req } from "../helpers";

describe("HttpRequestImpl helpers", () => {
  it("should retun an HttpRequestImpl with povided parameters", () => {
    const params = {
      url: "/",
      method: HttpMethods.DELETE,
      body: stringBody("sample body"),
      headers: { Authorizarion: "Bypass" }
    };
    const request = req(params);

    expect(request.body).toEqual(params.body);
    expect(request.url).toEqual(params.url);
    expect(request.headers).toEqual(params.headers);
    expect(request.method).toEqual(params.method);
  });

  it("should properly set default parameters", () => {
    const request = req({ url: "/index.html" });

    expect(request.body).toEqual(stringBody(""));
    expect(request.url).toEqual("/index.html");
    expect(request.headers).toEqual({});
    expect(request.method).toEqual(HttpMethods.GET);
  });
});
