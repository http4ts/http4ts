import { createHttpClient } from "../core/http-client";
import fetch from "node-fetch";
import { HttpRequestImpl, stringBody } from "../node";

async function main() {
  const send = createHttpClient(fetch as any);
  const request = new HttpRequestImpl(
    "https://api.github.com/users/http4ts/repos",
    stringBody(""),
    "GET"
  );

  const response = await send(request);

  console.log(response);
}

main().catch(console.error);
