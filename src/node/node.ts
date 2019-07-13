import {
  createServer,
  RequestListener,
  Server,
  IncomingMessage,
  ServerResponse
} from "http";

import { ServerConfig, HttpHandler, HttpServer } from "../http4ts";
import { HttpResponse } from "../http";
import { streamToString } from "./utils";

function writeResponse(res: HttpResponse, nodeRes: ServerResponse) {
  nodeRes.statusCode = res.status;
  Object.entries(res.headers).forEach(([key, value]) => {
    nodeRes.setHeader(key, value);
  });
  nodeRes.write(res.body); // TODO: how to handle errors here?
  nodeRes.end();
}

function writeErrorResponse(nodeRes: ServerResponse) {
  const res = {
    status: 500,
    body: "Oops!",
    headers: {}
  };
  writeResponse(res, nodeRes);
}

class NodeHttpServer implements HttpServer {
  constructor(private server: Server, private port: number) {}

  start() {
    return new Promise((resolve, reject) => {
      this.server.listen(this.port, () => resolve());
      this.server.on("error", err => {
        reject(err);
      });
    });
  }

  stop() {
    this.server.close(); // TODO: handle errors
  }
}

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
        writeResponse(response, res);
      } catch (error) {
        console.log(error); // TODO: add proper logging or send the error to and error calback
        writeErrorResponse(res);
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
}
