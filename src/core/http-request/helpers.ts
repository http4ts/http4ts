import { HttpMethod, HttpBody, HttpHeaders, HttpMethods } from "../http";
import { stringBody, HttpRequestImpl } from "../../node";

export type RequestParams = {
  url: string;
  method?: HttpMethod; // Method can also be optional in this function
  body?: HttpBody;
  headers?: HttpHeaders;
};

export function req({
  url,
  method = HttpMethods.GET,
  body = stringBody(""),
  headers = {}
}: RequestParams) {
  return new HttpRequestImpl(url, method, body, headers);
}
