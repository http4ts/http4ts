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

export interface HttpBody {
  stream: ReadableStream;
  toString: () => Promise<string>;
  asJson: <T>() => Promise<T>;
}

export interface HttpMessage {
  headers: HttpRequestHeaders;
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
