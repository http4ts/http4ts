import { createHttpClient } from "../http-client";
import fetch from "node-fetch";
import { HttpRequestImpl } from "../node/http-request";

async function main() {
  const send = createHttpClient(fetch as any);

  const request = new HttpRequestImpl(
    "https://api.github.com/users/http4ts/repos",
    null,
    "GET"
  );

  const response = await send(request);

  console.log(response);
}

main().catch(console.error);
