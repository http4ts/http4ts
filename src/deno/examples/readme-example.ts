import { listenAndServe } from "https://deno.land/std/http/server.ts";

import {
  HttpRequest,
  toDenoRequestListener,
  OK
} from "https://deno.land/x/http4ts/mod.ts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handler(req: HttpRequest) {
  // 1. Write the handler as a function that returns response
  return OK({ body: "Hello world!" });
}

console.log("Listening on http://localhost:8000");
await listenAndServe({ port: 8000 }, toDenoRequestListener(handler));
