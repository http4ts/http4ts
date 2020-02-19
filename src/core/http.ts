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
  asString: (encoding?: string) => Promise<string>;
}

export interface HttpMessage {
  headers: HttpHeaders;
  body: HttpBody; // TODO: the correct type is HttpBody | null
}

export interface HttpRequest extends HttpMessage {
  method: HttpMethod;
  url: string;

  setHeaders: (headers: HttpHeaders) => HttpRequest;
  addHeader: (header: string, value: string | string[]) => HttpRequest;
  replaceHeader: (header: string, value: string | string[]) => HttpRequest;
  removeHeader: (header: string) => HttpRequest;

  setUrl: (url: string) => HttpRequest;
  query: (name: string) => HttpQuery;
  removeQuery: (name: string) => HttpRequest;
  addQuery: (name: string, value: string | string[]) => HttpRequest;
  replaceQuery: (name: string, value: string | string[]) => HttpRequest;
  path: () => string;

  setBody: (body: HttpBody | string) => HttpRequest;

  setMethod: (method: HttpMethod) => HttpRequest;
}

export interface HttpResponse extends HttpMessage {
  status: HttpStatus;

  setHeaders: (headers: HttpHeaders) => HttpResponse;
  addHeader: (header: string, value: string | string[]) => HttpResponse;
  replaceHeader: (header: string, value: string | string[]) => HttpResponse;
  removeHeader: (header: string) => HttpResponse;

  setBody: (bod: HttpBody) => HttpResponse;

  setStatus: (status: HttpStatus) => HttpResponse;
}
