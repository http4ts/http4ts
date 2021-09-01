import {
  HttpHandler,
  HttpRequestImpl,
  BufferedBody,
  HttpResponse,
  HttpStatus,
  HttpBody,
  stringBody
} from "./core/mod.ts";
import { toHttp4tsHeader, iteratorToStream, toHeaders } from "./utils.ts";

function toHttp4tsRequest(denoReq: Request) {
  let body: HttpBody = stringBody("");
  if (denoReq.body) {
    body = new BufferedBody(denoReq.body);
  }

  return new HttpRequestImpl(
    denoReq.url,
    denoReq.method,
    body,
    toHttp4tsHeader(denoReq.headers)
  );
}

function toDenoResponse(http4tsResponse: HttpResponse) {
  const body = iteratorToStream(http4tsResponse.body[Symbol.asyncIterator]());
  const headers = toHeaders(http4tsResponse.headers);

  return new Response(body, { headers, status: http4tsResponse.status });
}

/**
 * Binds http4ts handler to Deno server request listener
 * @param handler Root HttpHandler of the server application
 * @param requests Deno HttpConn
 */
export async function handleDenoRequest(
  handler: HttpHandler,
  request: Deno.RequestEvent
) {
  try {
    const http4tsResponse = await handler(toHttp4tsRequest(request.request));
    request.respondWith(toDenoResponse(http4tsResponse));
  } catch (error) {
    console.log(error);
    request.respondWith(
      new Response(null, { status: HttpStatus.INTERNAL_SERVER_ERROR })
    );
  }
}
