import { HttpRequest, HttpResponse } from "./http";
import { HttpHandler } from "./http4ts";

export type Fetch = (
  url: RequestInfo,
  init?: RequestInit | undefined
) => Promise<Response>;

export function createHttpClient(theFetch: Fetch): HttpHandler {
  return async (req: HttpRequest): Promise<HttpResponse> => {
    const resp = await theFetch(req.url, {
      method: req.method,
      body: req.body
    });

    let headers = {};
    resp.headers.forEach(
      (value, key) => (headers = { ...headers, [key]: value })
    );

    return {
      body: await resp.text(),
      headers,
      status: resp.status
    };
  };
}
