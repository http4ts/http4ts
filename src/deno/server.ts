import {
  HttpHandler,
  HttpRequestImpl,
  stringBody,
  HttpRequest
} from "./core/mod.ts";
import { toHttp4tsHeader } from "./utils.ts";
import { ServerRequest } from "./imports.ts";

type DenoRequestListener = (req: ServerRequest) => void;

function toHttp4tsRequest(denoReq: ServerRequest): HttpRequest {
  return new HttpRequestImpl(
    denoReq.url,
    denoReq.method,
    stringBody(""), // TODO
    toHttp4tsHeader(denoReq.headers)
  );
}

export function toDenoRequestListener(
  handler: HttpHandler
): DenoRequestListener {
  return async (denoReq: ServerRequest) => {
    const req = toHttp4tsRequest(denoReq);

    const resp = await handler(req);

    const headers = new Headers(resp.headers as Record<string, string>);

    const response = {
      status: resp.status,
      headers,
      body: await resp.body.asString()
    };

    denoReq.respond(response);
  };
}
