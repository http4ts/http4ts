import { HttpMethod, HttpBody, HttpMethods } from "../http";
import { stringBody, HttpRequestImpl } from "../../node";
import { RequestHttpHeaders } from "../http-headers";

export type RequestParams = {
  url: string;
  method?: HttpMethod; // Method can also be optional in this function
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
