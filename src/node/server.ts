import { RequestListener, IncomingMessage, ServerResponse } from "http";

import { HttpHandler } from "../core/http4ts";
import { HttpRequest, HttpResponse } from "../core/http";
import { HttpStatus } from "../core/http-status";
import { HttpRequestImpl } from "../core/http-request/http-request-impl";
import { BufferedBody } from "../core/http-body/buffered-body";
import { writeIterableToStream, waitToFinish } from "./node-stream-utils";

function toHttp4tsRequest(nodeReq: IncomingMessage): HttpRequest {
  return new HttpRequestImpl(
    nodeReq.url || "", // TODO: Maybe failing is better
    nodeReq.method || "", // TODO: Maybe failing is better
    new BufferedBody(nodeReq),
    nodeReq.headers
  );
}

async function writeToNodeResponse(
  http4tsResponse: HttpResponse,
  nodeResponse: ServerResponse
) {
  nodeResponse.writeHead(http4tsResponse.status, http4tsResponse.headers);

  await writeIterableToStream(http4tsResponse.body, nodeResponse);
}

async function writeErrorResponse(nodeRes: ServerResponse) {
  nodeRes.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

  nodeRes.end();
  await waitToFinish(nodeRes);
}

/**
 * Binds http4ts handler to Node.js server request listener
 * @param handler Root HttpHandler of the server application
 */
export function toNodeRequestListener(handler: HttpHandler): RequestListener {
  return async (req, res) => {
    try {
      const http4tsResponse = await handler(toHttp4tsRequest(req));

      await writeToNodeResponse(http4tsResponse, res);
    } catch (error) {
      console.log(error); // TODO: add proper logging or send the error to an error callback
      await writeErrorResponse(res);
    }
  };
}
