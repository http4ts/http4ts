import { HttpResponse, HttpBody, HttpStatus } from "../http";
import { stringBody } from "../http-body/helpers";
import { ResponseHttpHeaders } from "../http-headers";

export class HttpResponseImpl implements HttpResponse {
  constructor(
    public readonly status: HttpStatus,
    public readonly body: HttpBody,
    public readonly headers: ResponseHttpHeaders
  ) {}

  setHeaders(headers: ResponseHttpHeaders) {
    return new HttpResponseImpl(this.status, this.body, headers);
  }

  addHeader(header: keyof ResponseHttpHeaders, value: string | string[]) {
    if (this.headers[header]) {
      throw `Trying to add an existing header with name ${header}. You can use HttpRequest.replaceHeader instead.`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpResponseImpl(this.status, this.body, newHeaders);
  }

  replaceHeader(header: keyof ResponseHttpHeaders, value: string | string[]) {
    if (!this.headers[header]) {
      throw `Trying to replace a non existing header with name ${header}. You can use HttpRequest.addHeader instead.`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpResponseImpl(this.status, this.body, newHeaders);
  }

  removeHeader(headerToRemove: keyof ResponseHttpHeaders) {
    if (!this.headers[headerToRemove]) {
      throw `Trying to remove a non existing header with name ${headerToRemove}.`;
    }
    const newHeaders = Object.keys(this.headers).reduce(
      (headers: ResponseHttpHeaders, header) => {
        if (header !== headerToRemove) {
          headers[header] = this.headers[header];
        }
        return headers;
      },
      {}
    );
    return new HttpResponseImpl(this.status, this.body, newHeaders);
  }

  setBody(body: HttpBody | string) {
    const theBody = typeof body === "string" ? stringBody(body) : body;

    return new HttpResponseImpl(this.status, theBody, this.headers);
  }

  setStatus(status: HttpStatus) {
    return new HttpResponseImpl(status, this.body, this.headers);
  }
}
