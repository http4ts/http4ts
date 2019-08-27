export interface HttpRequestHeaders {
  [header: string]: string | string[] | undefined;
}

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "OPTIONS"
  | "TRACE"
  | "PATCH"
  | "PURGE"
  | "HEAD"
  | string;

export type HttpBody = string; // | stream

export interface HttpMessage {
  headers: HttpRequestHeaders;
  body: HttpBody;
}

export interface HttpRequest extends HttpMessage {
  method: HttpMethod;
  url: URL;
  bodyToJson: <T>() => T;
  replaceHeader: (header: string, value: string) => HttpRequest;
  removeHeader: (header: string) => HttpRequest;
}

export type HttpStatus = number;

export interface HttpResponse extends HttpMessage {
  status: HttpStatus;
}
