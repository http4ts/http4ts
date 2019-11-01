import { RequestListener, IncomingMessage, ServerResponse } from "http";

import { HttpHandler } from "../http4ts";
import { HttpRequest, HttpResponse } from "../http";
import { streamToString } from "./utils";
import { HttpRequestImpl } from "./http-request";

async function translateRequest(
  nodeReq: IncomingMessage
): Promise<HttpRequest> {
  return new HttpRequestImpl(
    nodeReq.url || "", // TODO: Maybe failing is better
    await streamToString(nodeReq),
    nodeReq.method || "", // TODO: Maybe failing is better
    nodeReq.headers
  );
}

function writeResponse(
  res: HttpResponse,
  nodeRes: ServerResponse
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    nodeRes.statusCode = res.status;
    for (const key in res.headers) {
      if (res.headers.hasOwnProperty(key)) {
        const value = res.headers[key];
        nodeRes.setHeader(key, value || "");
      }
    }
    nodeRes.write(res.body, reject);
    nodeRes.end();
    resolve();
  });
}

function writeErrorResponse(nodeRes: ServerResponse): void {
  nodeRes.statusCode = 500;
  nodeRes.end(); // TODO: what to do with the callback here?
}

export function toNodeRequestListener(handler: HttpHandler): RequestListener {
  return async (req, res) => {
    try {
      const http4tsResponse = await handler(await translateRequest(req));
      await writeResponse(http4tsResponse, res);
    } catch (error) {
      console.log(error); // TODO: add proper logging or send the error to an error callback
      writeErrorResponse(res);
    }
  };
}
