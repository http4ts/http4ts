import { listenAndServe } from "https://deno.land/std@v0.42.0/http/server.ts";

import {
  HttpRequest,
  HttpStatus,
  toDenoRequestListener,
  stringBody,
  res
} from "https://raw.githubusercontent.com/http4ts/http4ts/v0.1.1/src/deno/mod.ts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handler(req: HttpRequest) {
  // 1. Write the handler as a function that returns response
  return res({
    body: stringBody("Hello world!"),
    status: HttpStatus.OK
  });
}

console.log("Listening on http://localhost:8000");
await listenAndServe({ port: 8000 }, toDenoRequestListener(handler));
