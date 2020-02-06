import { HttpStatus } from "./http-status";
export { HttpStatus } from "./http-status";

export interface HttpHeaders {
  [header: string]: string | string[] | undefined;
}

export interface RequestHttpHeaders extends HttpHeaders {
  "a-im"?: string;
  accept?: string;
  "accept-charset"?: string;
  "accept-datetime"?: string;
  "accept-encoding"?: string;
  "accept-language"?: string;
  "access-control-request-method"?: string;
  "access-control-request-headers"?: string;
  authorization?: string;
  "cache-control"?: string;
  connection?: string;
  permanent?: string;
  "content-length"?: string;
  "content-md5"?: string;
  "content-type"?: string;
  cookie?: string;
  date?: string;
  expect?: string;
  forwarded?: string;
  from?: string;
  host?: string;
  "http2-settings"?: string;
  "if-match"?: string;
  "if-modified-since"?: string;
  "if-none-match"?: string;
  "if-range"?: string;
  "if-unmodified-since"?: string;
  "max-forwards"?: string;
  origin?: string;
  pragma?: string;
  "proxy-authorization"?: string;
  range?: string;
  referer?: string;
  te?: string;
  trailer?: string;
  "transfer-encoding"?: string;
  "user-agent"?: string;
  upgrade?: string;
  via?: string;
  warning?: string;
}

export interface ResponseHttpHeaders extends HttpHeaders {
  "access-control-allow-origin"?: string;
  "access-control-allow-credentials"?: string;
  "access-control-expose-headers"?: string;
  "access-control-max-age"?: string;
  "access-control-allow-methods"?: string;
  "access-control-allow-header"?: string;
  "accept-patch"?: string;
  "accept-ranges"?: string;
  age?: string;
  allow?: string;
  "alt-svc"?: string;
  "cache-control"?: string;
  connection?: string;
  "content-encoding"?: string;
  "content-language"?: string;
  "content-length"?: string;
  "content-location"?: string;
  "content-md5"?: string;
  "content-range"?: string;
  "content-type"?: string;
  date?: string;
  "delta-base"?: string;
  etag?: string;
  expires?: string;
  im?: string;
  "last-modified"?: string;
  link?: string;
  location?: string;
  permanent?: string;
  p3p?: string;
  pragma?: string;
  "proxy-authenticate"?: string;
  "public-key-pins"?: string;
  "retry-after"?: string;
  server?: string;
  "set-cookie"?: string;
  "strict-transport-security"?: string;
  trailer?: string;
  "transfer-encoding"?: string;
  tk?: string;
  upgrade?: string;
  vary?: string;
  via?: string;
  warning?: string;
  "www-authenticate"?: string;
  "x-frame-options"?: string;
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
  body: HttpBody;
}

export interface HttpRequest extends HttpMessage {
  headers: RequestHttpHeaders;
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
  headers: ResponseHttpHeaders;
  status: HttpStatus;
}
