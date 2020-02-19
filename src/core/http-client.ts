import { HttpRequest, HttpResponse } from "./http";
import { HttpHandler } from "./http4ts";
import { res } from "./http-response/helpers";
import { stringBody } from "./http-body/helpers";

type Headers = {
  forEach: (cb: (value: string, key: string) => void) => void;
};

export type Fetch = (
  url: string,
  init?: { method: string; body: string | undefined }
) => Promise<{
  headers: Headers;
  text: () => Promise<string>;
  status: number;
}>;

export function createHttpClient(theFetch: Fetch): HttpHandler {
  return async (req: HttpRequest): Promise<HttpResponse> => {
    const resp = await theFetch(req.url, {
      method: req.method,
      body: (await req.body.asString()) || undefined
    });

    let headers = {};
    resp.headers.forEach(
      (value, key) => (headers = { ...headers, [key]: value })
    );

    return res({
      body: stringBody(await resp.text()),
      headers,
      status: resp.status
    });
  };
}
