import * as http from "http";

import { HttpRequest, toNodeRequestListener } from "..";
import { OK } from "../../core/mod";

async function handler(req: HttpRequest) {
  await req.body.asString("UTF-8");
  return OK({
    body: "Hello world!"
  });
}

const server = http.createServer(toNodeRequestListener(handler));

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
