import { HttpMethods } from "../../http";
import { stringBody } from "../../http-body/helpers";
import { req } from "../helpers";

describe("HttpRequestImpl helpers", () => {
  test("req should retun an HttpRequestImpl with povided parameters", () => {
    const params = {
      url: "/",
      method: HttpMethods.DELETE,
      body: stringBody("sample body"),
      headers: { Authorizarion: "Bypass" }
    };
    const request = req(params.url, params.method, params.body, params.headers);

    expect(request.body).toEqual(params.body);
    expect(request.url).toEqual(params.url);
    expect(request.headers).toEqual(params.headers);
    expect(request.method).toEqual(params.method);
  });

  test("req should properly set default parameters", () => {
    const request = req("/index.html");

    expect(request.body).toEqual(stringBody(""));
    expect(request.url).toEqual("/index.html");
    expect(request.headers).toEqual({});
    expect(request.method).toEqual(HttpMethods.GET);
  });

  test("req should instantiate a StringBody when a string is passed as body", () => {
    const expectedBody = stringBody("some-body");

    const request1 = req("/", HttpMethods.GET, "some-body");
    const request2 = req("/", HttpMethods.GET, stringBody("some-body"));

    expect(request1.body).toEqual(expectedBody);
    expect(request2.body).toEqual(expectedBody);
  });
});
