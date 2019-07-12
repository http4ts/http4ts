import { HttpRequest, HttpResponse } from "./http";
import { createServer } from "./http4ts";
import { Node } from "./node";

async function handler(req: HttpRequest): Promise<HttpResponse> {
  return {
    body: req.url,
    headers: {},
    status: 200
  };
}

createServer(handler, new Node(8080)).start();
