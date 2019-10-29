import { HttpRequest, HttpResponse } from "./http";

export type Fetch = (
  url: RequestInfo,
  init?: RequestInit | undefined
) => Promise<Response>;

export function createHttpClient(theFetch: Fetch) {
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
