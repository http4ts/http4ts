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
    const request = new HttpRequestImpl(headers, body, method, url);
    const expectedRequest = new HttpRequestImpl({ someOtherHeader: 'Some other header content' }, body, method, url);
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
    const request = new HttpRequestImpl(headers, body, method, url);
    const expectedHeaders = {
      someHeader: 'Some new content',
      someOtherHeader: 'Some other header content'
    }
    const expectedRequest = new HttpRequestImpl(expectedHeaders, body, method, url);
    expect(request.replaceHeader("someHeader", "Some new content")).toEqual(expectedRequest);
  })
})