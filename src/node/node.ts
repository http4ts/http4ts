import {
  createServer,
  RequestListener,
  IncomingMessage,
  ServerResponse
} from "http";

import { ServerConfig, HttpHandler, HttpServer } from "../http4ts";
import { HttpResponse, HttpRequest } from "../http";
import { HttpBodyImpl } from "./HttpBodyImpl";
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

  private async translateRequest(
    nodeReq: IncomingMessage
  ): Promise<HttpRequest> {
    return {
      body: HttpBodyImpl.fromNodeRequest(nodeReq),
      headers: nodeReq.headers,
      method: nodeReq.method || "",
      url: nodeReq.url || ""
    };
  }

  private writeResponse(
    res: HttpResponse,
    nodeRes: ServerResponse
  ): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      nodeRes.statusCode = res.status;
      for (const key in res.headers) {
        if (res.headers.hasOwnProperty(key)) {
          const value = res.headers[key];
          nodeRes.setHeader(key, value || "");
        }
      }
      const streamReader = res.body.stream.getReader();
      const readStreamToEnd = async (): Promise<any> => {
        const { done, value } = await streamReader.read();
        if (done) {
          nodeRes.end();
          resolve();
          return;
        }

        nodeRes.write(value);

        return readStreamToEnd();
      };
      try {
        readStreamToEnd();
      } catch (err) {
        reject(err);
      }
    });
  }

  private writeErrorResponse(nodeRes: ServerResponse): void {
    nodeRes.statusCode = 500;
    nodeRes.end(); // TODO: what to do with the callback here?
  }
}
