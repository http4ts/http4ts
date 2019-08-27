import { HttpRequestImpl } from "../http-request"

describe("HttpRequestImpl", () => {
  it("should remove headers", () => {
    const body = '"{param: 1}"'
    const url = ""
    const headers = {
      someHeader: 'Some content',
      someOtherHeader: 'Some other header content'
    }
    const method = "GET"
    const request = new HttpRequestImpl(url, headers, body, method);
    const expectedRequest = new HttpRequestImpl(url, { someOtherHeader: 'Some other header content' }, body, method);
    expect(request.removeHeader("someHeader")).toEqual(expectedRequest);
  })

  it("should replace headers", () => {
    const body = '"{param: 1}"'
    const url = ""
    const headers = {
      someHeader: 'Some content',
      someOtherHeader: 'Some other header content'
    }
    const method = "GET"
    const request = new HttpRequestImpl(url, headers, body, method);
    const expectedHeaders = {
      someHeader: 'Some new content',
      someOtherHeader: 'Some other header content'
    }
    const expectedRequest = new HttpRequestImpl(url, expectedHeaders, body, method);
    expect(request.replaceHeader("someHeader", "Some new content")).toEqual(expectedRequest);
  })
})