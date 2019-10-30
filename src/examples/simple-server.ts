import * as http from "http";

import { HttpRequest, HttpResponse } from "../http";
import { toNodeRequestListener } from "../node/server";

async function handler(req: HttpRequest): Promise<HttpResponse> {
  return {
    body: req.url,
    headers: {},
    status: 200
  };
}

const server = http.createServer(toNodeRequestListener(handler));

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
