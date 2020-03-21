import { res } from "../helpers";
import { HttpStatus, stringBody } from "../../../node";

const status = HttpStatus.OK;

describe("HttpResonseImpl", () => {
  it("should setHeaders", () => {
    const response = res({ status });

    expect(response.setHeaders({ Authorization: "Basic" })).toEqual(
      res({ status, headers: { Authorization: "Basic" } })
    );
  });

  it("should add headers", () => {
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const response = res({ status, headers });
    const expectedResponse = res({
      status,
      headers: {
        ...headers,
        addedHeader: "A new added header"
      }
    });
    expect(response.addHeader("addedHeader", "A new added header")).toEqual(
      expectedResponse
    );
    expect(() => {
      response.addHeader("someHeader", "Some value");
    }).toThrow();
  });

  it("should remove headers", () => {
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const response = res({ status, headers });
    const expectedResponse = res({
      status,
      headers: {
        someOtherHeader: "Some other header content"
      }
    });
    expect(response.removeHeader("someHeader")).toEqual(expectedResponse);
  });

  it("should replace headers", () => {
    const headers = {
      someHeader: "Some content",
      someOtherHeader: "Some other header content"
    };
    const response = res({ status, headers });
    const expectedHeaders = {
      someHeader: "Some new content",
      someOtherHeader: "Some other header content"
    };

    expect(
      response.replaceHeader("someHeader", "Some new content").headers
    ).toEqual(expectedHeaders);

    expect(() => {
      response.replaceHeader("someHeaderThatDoesNotExist", "1");
    }).toThrow();
  });

  it("should setBody", () => {
    const response = res({ status });

    expect(response.setBody(stringBody("somebody"))).toEqual(
      res({ status, body: stringBody("somebody") })
    );
  });

  it("setBody should accept string", () => {
    const request = res({ status: HttpStatus.OK, body: "body-1" });
    const expectedRequest = res({ status: HttpStatus.OK, body: "body-2" });

    expect(request.setBody("body-2")).toEqual(expectedRequest);
  });

  it("should setStatus", () => {
    const response = res({ status });

    expect(response.setStatus(HttpStatus.ACCEPTED)).toEqual(
      res({ status: HttpStatus.ACCEPTED })
    );
  });
});
