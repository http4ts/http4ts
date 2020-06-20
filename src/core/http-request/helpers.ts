import { HttpMethod, HttpBody, HttpMethods } from "../http";
import { HttpRequestImpl } from "./http-request-impl";
import { RequestHttpHeaders } from "../http-headers";
import { stringBody } from "../http-body/helpers";

export type RequestParams = {
  url: string;
  method: HttpMethod;
  body?: HttpBody | string;
  headers?: RequestHttpHeaders;
};

export type RequestHelperFactoryParams = Omit<RequestParams, "method">;

/**
 * Instantiates an HttpResponse based on the provided data
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

export function GET({ url, body, headers }: RequestHelperFactoryParams) {
  return req({
    url,
    method: HttpMethods.GET,
    body,
    headers
  });
}

export function POST({ url, body, headers }: RequestHelperFactoryParams) {
  return req({
    url,
    method: HttpMethods.POST,
    body,
    headers
  });
}

export function PUT({ url, body, headers }: RequestHelperFactoryParams) {
  return req({
    url,
    method: HttpMethods.PUT,
    body,
    headers
  });
}

export function PATCH({ url, body, headers }: RequestHelperFactoryParams) {
  return req({
    url,
    method: HttpMethods.PATCH,
    body,
    headers
  });
}

export function DELETE({ url, body, headers }: RequestHelperFactoryParams) {
  return req({
    url,
    method: HttpMethods.DELETE,
    body,
    headers
  });
}

export function HEAD({ url, body, headers }: RequestHelperFactoryParams) {
  return req({
    url,
    method: HttpMethods.HEAD,
    body,
    headers
  });
}
