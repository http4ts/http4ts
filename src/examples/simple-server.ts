import { HttpRequest, HttpResponse } from "../http";
import { createServer } from "../http4ts";
import { Node } from "../node/node";

async function handler(req: HttpRequest): Promise<HttpResponse> {
  return {
    body: req.path,
    headers: {},
    status: 200
  };
}

async function main() {
  await createServer(handler, new Node(8080)).start();
}

main().catch(console.error);
