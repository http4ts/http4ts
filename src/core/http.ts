import { HttpStatus } from "./http-status";
export { HttpStatus } from "./http-status";

export interface HttpHeaders {
  [header: string]: string | string[] | undefined;
}

export type HttpQuery = string | string[] | undefined | null;

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  PATCH = "PATCH",
  PURGE = "PURGE",
  HEAD = "HEAD"
}

export type HttpMethod = HttpMethods | string;

export interface HttpBody extends AsyncIterable<Uint8Array> {
  /**
   * Reads the body stream to end and decodes it as string.
   * @param encoding
   */
  asString: (encoding?: string) => Promise<string>;
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
