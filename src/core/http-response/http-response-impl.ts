import { HttpResponse, HttpBody, HttpHeaders, HttpStatus } from "../http";

export class HttpResponseImpl implements HttpResponse {
  constructor(
    public readonly status: HttpStatus,
    public readonly body: HttpBody,
    public readonly headers: HttpHeaders
  ) {}

  setHeaders(headers: HttpHeaders) {
    return new HttpResponseImpl(this.status, this.body, headers);
  }

  addHeader(header: string, value: string | string[]) {
    if (this.headers[header]) {
      throw `Trying to add an existing header with name ${header}. You can use HttpRequest.replaceHeader instead.`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpResponseImpl(this.status, this.body, newHeaders);
  }

  replaceHeader(header: string, value: string | string[]) {
    if (!this.headers[header]) {
      throw `Trying to replace a non existing header with name ${header}. You can use HttpRequest.addHeader instead.`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpResponseImpl(this.status, this.body, newHeaders);
  }

  removeHeader(headerToRemove: string) {
    if (!this.headers[headerToRemove]) {
      throw `Trying to remove a non existing header with name ${headerToRemove}.`;
    }
    const newHeaders = Object.keys(this.headers).reduce(
      (headers: HttpHeaders, header) => {
        if (header !== headerToRemove) {
          headers[header] = this.headers[header];
        }
        return headers;
      },
      {}
    );
    return new HttpResponseImpl(this.status, this.body, newHeaders);
  }

  setBody(body: HttpBody) {
    return new HttpResponseImpl(this.status, body, this.headers);
  }

  setStatus(status: HttpStatus) {
    return new HttpResponseImpl(status, this.body, this.headers);
  }
}
