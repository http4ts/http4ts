import { res, HttpStatus, stringBody } from "./core/mod.ts";
import { toDenoRequestListener } from "./server.ts";
import { listenAndServe } from "./imports.ts";

async function main() {
  const handler = () =>
    res({
      status: HttpStatus.LOCKED,
      headers: { "accept-language": "de-DE" },
      body: stringBody("Hello world!")
    });

  console.log("Listening on http://localhost:8000");
  await listenAndServe({ port: 8000 }, toDenoRequestListener(handler));
}

await main();
