import { HttpMethod, HttpBody, HttpMethods } from "../http";
import { HttpRequestImpl } from "./http-request-impl";
import { RequestHttpHeaders } from "../http-headers";
import { stringBody } from "../http-body/helpers";

export type RequestParams = {
  url: string;
  method?: HttpMethod;
  body?: HttpBody | string;
  headers?: RequestHttpHeaders;
};

/**
 * Instantiates an HttpResponse based on the provided data
 * @param obj Request representative object. Only url is mandatory. The default HttpMethod is GET.
 */
export function req({
  url,
  method = HttpMethods.GET,
  body = stringBody(""),
  headers = {}
}: RequestParams) {
  const theBody = typeof body === "string" ? stringBody(body) : body;

  return new HttpRequestImpl(url, method, theBody, headers);
}
