import { HttpRequest, HttpResponse } from "./http";

export type HttpHandler = (
  req: HttpRequest
) => HttpResponse | Promise<HttpResponse>;

export type HttpFilter = (
  handler: HttpHandler
) => Promise<HttpHandler> | HttpHandler;

export interface HttpServer {
  start(): Promise<void>;
  stop(): Promise<void>;
}

export interface ServerConfig {
  port: number;
  toServer(httpHandler: HttpHandler): HttpServer;
}

export function createServer(
  httpHandler: HttpHandler,
  serverConfig: ServerConfig
): HttpServer {
  return serverConfig.toServer(httpHandler);
}
