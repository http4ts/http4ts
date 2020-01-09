import { HttpStatus } from "./http-status";
export { HttpStatus } from "./http-status";

export interface HttpHeaders {
  [header: string]: string | string[] | undefined;
}

export type HttpQuery = string | string[] | undefined | null;

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

export interface HttpBody extends AsyncIterable<Uint8Array> {
  asString: (encoding?: string) => Promise<string>;
  asJson: <T>() => Promise<T>;
}

export interface HttpMessage {
  headers: HttpHeaders;
  body: HttpBody;
}

export interface HttpRequest extends HttpMessage {
  method: HttpMethod;
  url: string;
  addHeader: (header: string, value: string | string[]) => HttpRequest;
  replaceHeader: (header: string, value: string | string[]) => HttpRequest;
  removeHeader: (header: string) => HttpRequest;
  query: (name: string) => HttpQuery;
  removeQuery: (name: string) => HttpRequest;
  addQuery: (name: string, value: string | string[]) => HttpRequest;
  replaceQuery: (name: string, value: string | string[]) => HttpRequest;
  path: () => string;
}

export interface HttpResponse extends HttpMessage {
  status: HttpStatus;
}
