import { HttpStatus } from "./http-status.ts";
import {
  HttpHeaders,
  RequestHttpHeaders,
  ResponseHttpHeaders
} from "./http-headers.ts";
export { HttpStatus } from "./http-status.ts";

export type HttpQuery = string | string[] | undefined | null;

export const enum HttpMethods {
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

export interface HttpBody extends AsyncIterable<Uint8Array | string> {
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
  headers: RequestHttpHeaders;
  method: HttpMethod;
  url: string;

  setHeaders: (headers: RequestHttpHeaders) => HttpRequest;
  addHeader: (
    header: keyof RequestHttpHeaders,
    value: string | string[]
  ) => HttpRequest;
  replaceHeader: (
    header: keyof RequestHttpHeaders,
    value: string | string[]
  ) => HttpRequest;
  removeHeader: (header: keyof RequestHttpHeaders) => HttpRequest;

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
  headers: ResponseHttpHeaders;
  status: HttpStatus;

  setHeaders: (headers: ResponseHttpHeaders) => HttpResponse;
  addHeader: (
    header: keyof ResponseHttpHeaders,
    value: string | string[]
  ) => HttpResponse;
  replaceHeader: (
    header: keyof ResponseHttpHeaders,
    value: string | string[]
  ) => HttpResponse;
  removeHeader: (header: keyof ResponseHttpHeaders) => HttpResponse;

  setBody: (body: HttpBody) => HttpResponse;

  setStatus: (status: HttpStatus) => HttpResponse;
}
