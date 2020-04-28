import { ServerRequest } from "./imports.ts";

import {
  HttpHandler,
  HttpRequestImpl,
  BufferedBody,
  setupEnvironment,
  HttpResponse,
  HttpStatus
} from "./core/mod.ts";
import {
  toHttp4tsHeader,
  readerToAsyncIterator,
  iterableToReadableStream
} from "./utils.ts";

type DenoRequestListener = (req: ServerRequest) => Promise<void>;

function toHttp4tsRequest(denoReq: ServerRequest) {
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

async function writeToDenoResponse(
  http4tsResponse: HttpResponse,
  denoRequest: ServerRequest
) {
  const headers = new Headers(
    http4tsResponse.headers as Record<string, string>
  );

  await denoRequest.respond({
    status: http4tsResponse.status,
    headers,
    body: iterableToReadableStream(http4tsResponse.body)
  });
}

async function writeErrorResponse(denoRequest: ServerRequest) {
  await denoRequest.respond({
    status: HttpStatus.INTERNAL_SERVER_ERROR
  });
}

/**
 * Binds http4ts handler to Deno server request listener
 * @param handler Root HttpHandler of the server application
 */
export function toDenoRequestListener(
  handler: HttpHandler
): DenoRequestListener {
  setupEnvironment(TextDecoder, TextEncoder);

  return async (req: ServerRequest) => {
    try {
      const http4tsResponse = await handler(toHttp4tsRequest(req));

      await writeToDenoResponse(http4tsResponse, req);
    } catch (error) {
      console.log(error); // TODO: add proper logging or send the error to an error callback
      await writeErrorResponse(req);
    }
  };
}
