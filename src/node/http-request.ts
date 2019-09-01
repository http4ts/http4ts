import { HttpRequest, HttpMethod, HttpBody, HttpRequestHeaders } from "../http";

export class HttpRequestImpl implements HttpRequest {
  constructor(
    public readonly path: string,
    public readonly headers: HttpRequestHeaders = {},
    public readonly body: HttpBody,
    public readonly method: HttpMethod
  ) {}

  bodyToJson() {
    return JSON.parse(this.body);
  }

  replaceHeader(header: string, value: string | string[]) {
    if (!this.headers[header]) {
      throw `Header ${header} does not exist`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpRequestImpl(this.path, newHeaders, this.body, this.method);
  }

  removeHeader(headerToRemove: string) {
    const newHeaders = Object.keys(this.headers).reduce(
      (headers: HttpRequestHeaders, header) => {
        if (header !== headerToRemove) {
          headers[header] = this.headers[header];
        }
        return headers;
      },
      {}
    );
    return new HttpRequestImpl(this.path, newHeaders, this.body, this.method);
  }
}
