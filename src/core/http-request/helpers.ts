import { HttpMethod, HttpBody, HttpHeaders, HttpMethods } from "../http";
import { stringBody, HttpRequestImpl } from "../../node";

export type RequestParams = {
  url: string;
  method?: HttpMethod; // Method can also be optional in this function
  body?: HttpBody | string;
  headers?: HttpHeaders;
};

export function req({
  url,
  method = HttpMethods.GET,
  body = stringBody(""),
  headers = {}
}: RequestParams) {
  const theBody = typeof body === "string" ? stringBody(body) : body;

  return new HttpRequestImpl(url, method, theBody, headers);
}
