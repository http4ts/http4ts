import {
  createServer,
  RequestListener,
  IncomingMessage,
  ServerResponse
} from "http";

import { ServerConfig, HttpHandler, HttpServer } from "../http4ts";
import { HttpResponse, HttpRequest } from "../http";
import { streamToString } from "./utils";
import { NodeHttpServer } from "./node-http-server";
import { HttpStatus } from "../http-status";

export class Node implements ServerConfig {
  constructor(public port: number) {}

  toServer(httpHandler: HttpHandler): HttpServer {
    const nodeServer = createServer(this.translateHandler(httpHandler));

    return new NodeHttpServer(nodeServer, this.port);
  }

  private translateHandler(httpHandler: HttpHandler): RequestListener {
    return async (req: IncomingMessage, res: ServerResponse) => {
      try {
        const request = await this.translateRequest(req);
        const response = await httpHandler(request);
        await this.writeResponse(response, res);
      } catch (error) {
        console.log(error); // TODO: add proper logging or send the error to an error callback
        this.writeErrorResponse(res);
      }
    };
  }

  private async translateRequest(
    nodeReq: IncomingMessage
  ): Promise<HttpRequest> {
    return {
      body: await streamToString(nodeReq),
      headers: nodeReq.headers,
      method: nodeReq.method || "",
      url: nodeReq.url || ""
    };
  }

  private writeResponse(
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

  private writeErrorResponse(nodeRes: ServerResponse): void {
    nodeRes.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    nodeRes.end(); // TODO: what to do with the callback here?
  }
}
