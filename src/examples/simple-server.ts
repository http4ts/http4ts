import { HttpRequest, HttpResponse, HttpStatus } from "../http";
import * as http from "http";

import { toNodeRequestListener } from "../node/server";
import { HttpBodyImpl } from "../node/HttpBodyImpl";

async function handler(req: HttpRequest): Promise<HttpResponse> {
  console.log(await HttpBodyImpl.fromString("This is some string").asString("utf8"));
  console.log(await req.body.asJson())
  return {
    body: HttpBodyImpl.fromString("This is some string"),
    headers: {},
    status: HttpStatus.OK,
  };
}

const server = http.createServer(toNodeRequestListener(handler));

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
