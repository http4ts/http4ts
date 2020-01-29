import { HttpMethod, HttpBody, HttpHeaders } from "../http";
import { stringBody, HttpRequestImpl } from "../../node";

export type RequestParams = {
  url: string;
  method: HttpMethod; // Method can also be optional in this function
  body?: HttpBody;
  headers?: HttpHeaders;
};

export function req({ url, method, body, headers }: RequestParams) {
  return new HttpRequestImpl(
    url,
    method,
    body || stringBody(""),
    headers || {}
  );
}
