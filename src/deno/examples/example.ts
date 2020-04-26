import { res, HttpStatus, stringBody, req, HttpRequest } from "../core/mod.ts";
import { toDenoRequestListener } from "../server.ts";
import { listenAndServe } from "../imports.ts";

async function main() {
  const handler = async (req: HttpRequest) => {
    const b = await req.body.asString();
    console.log(b);
    return res({
      status: HttpStatus.LOCKED,
      headers: { "accept-language": "de-DE" },
      body: stringBody("Hello world! 😌" + b)
    });
  };

  console.log("Listening on http://localhost:8000");
  await listenAndServe({ port: 8000 }, toDenoRequestListener(handler));
}

await main();
