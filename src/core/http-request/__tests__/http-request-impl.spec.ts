import { stringBody } from "../../http-body/helpers";
import { req } from "../helpers";
import { HttpMethods } from "../../http";

describe("HttpRequestImpl", () => {
  it("should setHeaders", () => {
    const request = req("/", HttpMethods.GET, "", { Auth: "Basic" });
    const newHeaders = { Auth: "Complex", Content: "html" };
    const expectedRequest = req("/", HttpMethods.GET, "", newHeaders);

    expect(request.setHeaders(newHeaders)).toEqual(expectedRequest);
  });

  it("should add headers", () => {
    const body = "{param: 1}";
    const url = "http://localhost";
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const request = req(url, HttpMethods.GET, body, headers);
    const expectedRequest = req(url, HttpMethods.GET, body, {
      ...headers,
      addedHeader: "A new added header"
    });
    expect(request.addHeader("addedHeader", "A new added header")).toEqual(
      expectedRequest
    );
    expect(() => {
      request.addHeader("someHeader", "Some value");
    }).toThrow();
  });

  it("should remove headers", () => {
    const body = "{param: 1}";
    const url = "http://localhost";
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const request = req(url, HttpMethods.GET, body, headers);
    const expectedRequest = req(url, HttpMethods.GET, body, {
      someOtherHeader: "Some other header content"
    });
    expect(request.removeHeader("someHeader")).toEqual(expectedRequest);
  });

  it("should setUrl", () => {
    const request = req("/");
    const expectedRequest = req("/home");

    expect(request.setUrl("/home")).toEqual(expectedRequest);
  });

  it("should replace headers", () => {
    const body = "{param: 1}";
    const url = "http://localhost";
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const request = req(url, HttpMethods.GET, body, headers);
    const expectedHeaders = {
      someHeader: "Some new content",
      someOtherHeader: "Some other header content"
    };

    expect(
      request.replaceHeader("someHeader", "Some new content").headers
    ).toEqual(expectedHeaders);

    expect(() => {
      request.replaceHeader("someHeaderThatDoesNotExist", "1");
    }).toThrow();
  });

  it("should return query by queryName", () => {
    const url = "http://localhost?q=1&q=2&q=3";
    const request = req(url);
    expect(request.query("q")).toEqual(["1", "2", "3"]);
  });

  it("should add query", () => {
    const url = "http://localhost?q=1";
    const request = req(url);
    expect(request.addQuery("q2", "1").query("q2")).toEqual("1");
    expect(request.addQuery("q2", ["1", "2"]).query("q2")).toEqual(["1", "2"]);
  });

  it("should replace query", () => {
    const url = "http://localhost?q=1";
    const request = req(url);
    expect(request.replaceQuery("q", ["1", "2"]).query("q")).toEqual([
      "1",
      "2"
    ]);

    expect(() => {
      request.replaceQuery("q1", "1");
    }).toThrow();
  });

  it("should remove query", () => {
    const url = "http://localhost?q=1&q2=2";
    const request = req(url);
    expect(request.removeQuery("q2").query("q2")).toEqual(undefined);
  });

  it("should setBody", () => {
    const request = req("/", HttpMethods.GET, "body-1");
    const expectedRequest = req("/", HttpMethods.GET, "body-2");

    expect(request.setBody(stringBody("body-2"))).toEqual(expectedRequest);
  });

  it("setBody should accept string", () => {
    const request = req("/", HttpMethods.GET, "body-1");
    const expectedRequest = req("/", HttpMethods.GET, "body-2");

    expect(request.setBody("body-2")).toEqual(expectedRequest);
  });

  it("should setMethod", () => {
    const request = req("/");
    const expectedRequest = req("/", HttpMethods.DELETE);

    expect(request.setMethod(HttpMethods.DELETE)).toEqual(expectedRequest);
  });
});
