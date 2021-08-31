import { res, HttpStatus, stringBody, HttpRequest } from "../core/mod.ts";
import { handleDenoRequest } from "../server.ts";

async function handler(req: HttpRequest) {
  const b = await req.body.asString();
  console.log(b);
  return res({
    status: HttpStatus.LOCKED,
    headers: { "accept-language": "de-DE" },
    body: stringBody("Hello world! 😌" + b)
  });
}

async function serve(conn: Deno.Conn) {
  const requests = Deno.serveHttp(conn);
  for await (const req of requests) {
    await handleDenoRequest(handler, req);
  }
}

async function main() {
  console.log("Listening on http://localhost:8000");

  const listener = Deno.listen({ port: 8000 });
  for await (const conn of listener) {
    serve(conn);
  }
}

await main();
