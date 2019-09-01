export interface HttpRequestHeaders {
  [header: string]: string | string[] | undefined;
}

export type HttpQuery = string | string[] | undefined| null;

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
  url: string;
  bodyToJson: <T>() => T;
  replaceHeader: (header: string, value: string | string[]) => HttpRequest;
  removeHeader: (header: string) => HttpRequest;
  query: (name: string) => HttpQuery;
  removeQuery: (name: string) => HttpRequest;
  addQuery: (name: string, value: string | string[]) => HttpRequest;
  replaceQuery: (name: string, value: string | string[]) => HttpRequest;
  path: () => string;
}

export type HttpStatus = number;

export interface HttpResponse extends HttpMessage {
  status: HttpStatus;
}
