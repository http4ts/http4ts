import { ServerRequest } from "./imports.ts";

import {
  HttpHandler,
  HttpRequestImpl,
  BufferedBody,
  setupEnvironment,
  HttpResponse
} from "./core/mod.ts";
import {
  toHttp4tsHeader,
  readerToAsyncIterator,
  iterableToReadableStream
} from "./utils.ts";

type DenoRequestListener = (req: ServerRequest) => void;

setupEnvironment(TextDecoder, TextEncoder);

async function toHttp4tsRequest(denoReq: ServerRequest) {
  const body = new BufferedBody(
    readerToAsyncIterator(denoReq.body, denoReq.contentLength)
  );

  return new HttpRequestImpl(
    denoReq.url,
    denoReq.method,
    body,
    toHttp4tsHeader(denoReq.headers)
  );
}

function toDenoResponse(response: HttpResponse) {
  const headers = new Headers(response.headers as Record<string, string>);

  return {
    status: response.status,
    headers,
    body: iterableToReadableStream(response.body)
  };
}

export function toDenoRequestListener(
  handler: HttpHandler
): DenoRequestListener {
  return async (denoReq: ServerRequest) => {
    const req = await toHttp4tsRequest(denoReq);

    const resp = await handler(req);

    denoReq.respond(toDenoResponse(resp));
  };
}
