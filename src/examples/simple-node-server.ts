import * as http from "http";
import { TextEncoder } from "util";

import {
  HttpRequest,
  HttpStatus,
  toNodeRequestListener,
  res,
  BufferedBody,
  TheTextDecoder
} from "../node";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const encoder = new TextEncoder();
function encode(str: string) {
  return encoder.encode(str);
}

async function* bodyGen() {
  yield "Hello\n";
  await delay(1000);
  yield "World\n";
  await delay(1000);
  yield " 😌\n";
}

async function handler(req: HttpRequest) {
  const body = new BufferedBody(bodyGen());

  return res({
    body,
    status: HttpStatus.OK,
    headers: { "Content-Type": "text/html; charset=UTF-8" }
  });
}

const server = http.createServer(toNodeRequestListener(handler));

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
