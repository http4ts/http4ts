import { HttpMethod, HttpBody, HttpHeaders, HttpMethods } from "../http";
import { stringBody, HttpRequestImpl } from "../../node";

export type RequestParams = {
  url: string;
  method?: HttpMethod;
  body?: HttpBody | string;
  headers?: HttpHeaders;
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
