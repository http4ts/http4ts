import { HttpRequestImpl } from "../http-request";

describe("HttpRequestImpl", () => {
  it("should remove headers", () => {
    const body = '"{param: 1}"';
    const url = "http://localhost";
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const method = "GET";
    const request = new HttpRequestImpl(url, headers, body, method);
    const expectedRequest = new HttpRequestImpl(
      url,
      { someOtherHeader: "Some other header content" },
      body,
      method
    );
    expect(request.removeHeader("someHeader")).toEqual(expectedRequest);
  });

  it("should replace headers", () => {
    const body = '"{param: 1}"';
    const url = "http://localhost";
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const method = "GET";
    const request = new HttpRequestImpl(url, headers, body, method);
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
    const request = new HttpRequestImpl(url, {}, "", "GET");
    expect(request.query("q")).toEqual(["1", "2", "3"]);
  });

  it("should add query", () => {
    const url = "http://localhost?q=1";
    const request = new HttpRequestImpl(url, {}, "", "GET");
    expect(request.addQuery("q2", "1").query("q2")).toEqual("1");
  });

  it("should replace query", () => {
    const url = "http://localhost?q=1";
    const request = new HttpRequestImpl(url, {}, "", "GET");
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
    const request = new HttpRequestImpl(url, {}, "", "GET");
    expect(request.removeQuery("q2").query("q2")).toEqual(undefined);
  });
});
