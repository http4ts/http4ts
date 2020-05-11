import { HttpRequest, HttpResponse } from "./http.ts";

export type HttpHandler = (
  req: HttpRequest
) => HttpResponse | Promise<HttpResponse>;

export type HttpFilter = (
  handler: HttpHandler
) => Promise<HttpHandler> | HttpHandler;
