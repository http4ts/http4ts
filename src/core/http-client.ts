import { HttpRequest, HttpResponse } from "./http";
import { HttpHandler } from "./http4ts";
import { stringBody } from "../node";

export type Fetch = (
  url: RequestInfo,
  init?: RequestInit | undefined
) => Promise<Response>;

export function createHttpClient(theFetch: Fetch): HttpHandler {
  return async (req: HttpRequest): Promise<HttpResponse> => {
    const resp = await theFetch(req.url, {
      method: req.method,
      body: (await req.body.asString()) || null
    });

    let headers = {};
    resp.headers.forEach(
      (value, key) => (headers = { ...headers, [key]: value })
    );

    return {
      body: stringBody(await resp.text()),
      headers,
      status: resp.status
    };
  };
}
