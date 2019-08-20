import { HttpRequest, HttpMethod, HttpBody, HttpRequestHeaders } from "../http";

export class HttpRequestImpl implements HttpRequest {
  constructor(public readonly headers: HttpRequestHeaders,
    public readonly body: HttpBody,
    public readonly method: HttpMethod,
    public readonly url: string) { }

  bodyToJson() {
    return JSON.parse(this.body);
  }

  replaceHeader(header: string, value: string | string[]) {
    if (!this.headers[header]) {
      throw `Header ${header} does not exist`
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpRequestImpl(newHeaders, this.body, this.method, this.url);
  }

  removeHeader(headerToRemove: string) {
    const newHeaders = Object.keys(this.headers).reduce((headers: HttpRequestHeaders, header) => {
      if (header !== headerToRemove) {
        headers[header] = this.headers[header]
      }
      return headers
    }, {})
    return new HttpRequestImpl(newHeaders, this.body, this.method, this.url);
  }
}
