import { HttpMethod, HttpBody, HttpMethods } from "../http.ts";
import { HttpRequestImpl } from "./http-request-impl.ts";
import { RequestHttpHeaders } from "../http-headers.ts";
import { stringBody } from "../http-body/helpers.ts";

export type RequestParams = {
  url: string;
  method: HttpMethod;
  body?: HttpBody | string;
  headers?: RequestHttpHeaders;
};

export type RequestHelperFactoryParams = Omit<RequestParams, "method">;

/**
 * Instantiates an HttpRequest based on the provided request information
 * @param obj Request representative object.
 */
export function req({
  url,
  method,
  body = stringBody(""),
  headers = {}
}: RequestParams) {
  const theBody = typeof body === "string" ? stringBody(body) : body;

  return new HttpRequestImpl(url, method, theBody, headers);
}

export function GET(url: string, headers?: RequestHttpHeaders) {
  return req({
    url,
    method: HttpMethods.GET,
    body: undefined,
    headers
  });
}

export function POST(
  url: string,
  body: HttpBody | string,
  headers?: RequestHttpHeaders
) {
  return req({
    url,
    method: HttpMethods.POST,
    body,
    headers
  });
}

export function PUT(
  url: string,
  body: HttpBody | string,
  headers?: RequestHttpHeaders
) {
  return req({
    url,
    method: HttpMethods.PUT,
    body,
    headers
  });
}

export function PATCH(
  url: string,
  body: HttpBody | string,
  headers?: RequestHttpHeaders
) {
  return req({
    url,
    method: HttpMethods.PATCH,
    body,
    headers
  });
}

export function DELETE(
  url: string,
  headers?: RequestHttpHeaders,
  body?: HttpBody | string
) {
  return req({
    url,
    method: HttpMethods.DELETE,
    body,
    headers
  });
}

export function HEAD(url: string, headers: RequestHttpHeaders) {
  return req({
    url,
    method: HttpMethods.HEAD,
    body: undefined,
    headers
  });
}
