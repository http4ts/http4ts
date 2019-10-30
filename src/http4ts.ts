import { HttpRequest, HttpResponse } from "./http";

export type HttpHandler = (
  req: HttpRequest
) => HttpResponse | Promise<HttpResponse>;

export type HttpFilter = (
  handler: HttpHandler
) => Promise<HttpHandler> | HttpHandler;
