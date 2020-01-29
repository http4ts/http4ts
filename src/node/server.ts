import { RequestListener, IncomingMessage, ServerResponse } from "http";
import { once } from "events";
import * as util from "util";
import * as stream from "stream";

import { HttpHandler } from "../core/http4ts";
import { HttpRequest, HttpResponse } from "../core/http";
import { HttpStatus } from "../core/http-status";
import { HttpRequestImpl } from "../core/HttpRequestImpl";
import { setupEnvironment } from "../core/env";
import { BufferedBody } from "../core/http-body/buffered-body";

const finished = util.promisify(stream.finished);

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

  for await (const chunk of http4tsResponse.body) {
    if (!nodeResponse.write(Buffer.from(chunk))) {
      await once(nodeResponse, "drain");
    }
  }
  nodeResponse.end();
  await finished(nodeResponse);
}

async function writeErrorResponse(nodeRes: ServerResponse) {
  nodeRes.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

  nodeRes.end();
  await finished(nodeRes);
}

export function toNodeRequestListener(handler: HttpHandler): RequestListener {
  setupEnvironment(util.TextDecoder as any, util.TextEncoder as any);

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
