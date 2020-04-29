import {
  HttpRequest,
  HttpResponse,
  res,
  stringBody,
  setupEnvironment
} from "./core/mod.ts";

import { toHttp4tsHeader } from "./utils.ts";

setupEnvironment(TextDecoder, TextEncoder);

export async function send(req: HttpRequest): Promise<HttpResponse> {
  const response = await fetch(req.url, {
    headers: req.headers as Record<string, string>
  });

  return res({
    status: response.status,
    body: stringBody(await response.text()), // Should be replaced by `new BufferedBody(toAsyncIterator(response.body))` later. body.read is not impelemented yet
    headers: toHttp4tsHeader(response.headers)
  });
}
