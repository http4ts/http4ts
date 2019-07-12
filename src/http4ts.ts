import { HttpRequest, HttpResponse } from "./http";

export type HttpHandler = (req: HttpRequest) => Promise<HttpResponse>;

export type HttpFilter = (handler: HttpHandler) => Promise<HttpHandler>;

export interface HttpServer {
  start(): HttpServer;
  stop(): void;
}

export interface ServerConfig {
  port: number;
  toServer(httpHandler: HttpHandler): HttpServer;
}

export function createServer(
  httpHandler: HttpHandler,
  serverConfig: ServerConfig
) {
  return serverConfig.toServer(httpHandler);
}
