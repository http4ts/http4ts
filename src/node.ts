import {
  createServer,
  RequestListener,
  Server,
  IncomingMessage,
  ServerResponse
} from "http";

import { ServerConfig, HttpHandler, HttpServer } from "./http4ts";
import { HttpResponse } from "./http";
import { Readable } from "stream";

function streamToString(stream: Readable): Promise<string> {
  const chunks = [];

  return new Promise((resolve, reject) => {
    stream.on("data", chunk => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

async function translateRequest(nodeReq: IncomingMessage) {
  return {
    body: await streamToString(nodeReq),
    headers: nodeReq.headers,
    method: nodeReq.method,
    url: nodeReq.url
  };
}

function writeResponse(res: HttpResponse, nodeRes: ServerResponse) {
  nodeRes.statusCode = res.status;
  Object.entries(res.headers).forEach(([key, value]) => {
    nodeRes.setHeader(key, value);
  });
  nodeRes.write(res.body); // TODO: how to handle errors here?
  nodeRes.end();
}

function translateHandler(httpHandler: HttpHandler): RequestListener {
  return async (req: IncomingMessage, res: ServerResponse) => {
    const request = await translateRequest(req);
    const response = await httpHandler(request);
    writeResponse(response, res);
  };
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
    const nodeServer = createServer(translateHandler(httpHandler));

    return new NodeHttpServer(nodeServer, this.port);
  }
}
