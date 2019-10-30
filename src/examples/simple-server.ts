import { HttpRequest, HttpResponse } from "../http";
import { createServer } from "../http4ts";
import { Node } from "../node/node";
import { HttpStatus } from "../http-status";

async function handler(req: HttpRequest): Promise<HttpResponse> {
  return {
    body: req.url,
    headers: {},
    status: HttpStatus.OK
  };
}

async function main() {
  await createServer(handler, new Node(8080)).start();
}

main().catch(console.error);
