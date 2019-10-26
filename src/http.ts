export interface HttpHeaders {
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

export type HttpBody = string | null; // | stream

export interface HttpMessage {
  headers: HttpHeaders;
  body: HttpBody;
}

export interface HttpRequest extends HttpMessage {
  method: HttpMethod;
  url: string;
}

export type HttpStatus = number;

export interface HttpResponse extends HttpMessage {
  status: HttpStatus;
}
