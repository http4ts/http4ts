import {
  createServer,
  RequestListener,
  IncomingMessage,
  ServerResponse
} from "http";

import { ServerConfig, HttpHandler, HttpServer } from "../http4ts";
import { HttpResponse } from "../http";
import { streamToString } from "./utils";
import { NodeHttpServer } from "./node-http-server";

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

  private async translateRequest(nodeReq: IncomingMessage) {
    return {
      body: await streamToString(nodeReq),
      headers: nodeReq.headers,
      method: nodeReq.method,
      url: nodeReq.url
    };
  }

  private writeResponse(res: HttpResponse, nodeRes: ServerResponse) {
    return new Promise<void>((resolve, reject) => {
      nodeRes.statusCode = res.status;
      for (const key in res.headers) {
        if (res.headers.hasOwnProperty(key)) {
          const value = res.headers[key];
          nodeRes.setHeader(key, value);
        }
      }
      nodeRes.write(res.body, reject);
      nodeRes.end();
      resolve();
    });
  }

  private writeErrorResponse(nodeRes: ServerResponse) {
    nodeRes.statusCode = 500;
    nodeRes.end(); // TODO: what to do with the callback here?
  }
}
