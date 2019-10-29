import { HttpRequest } from "../http";
import { createHttpClient } from "../http-client";
import fetch from "node-fetch";

async function main() {
  const send = createHttpClient(fetch as any);

  const request: HttpRequest = {
    body: null,
    headers: {},
    method: "GET",
    url: "https://api.github.com/users/http4ts/repos"
  };

  const response = await send(request);

  console.log(response);
}

main().catch(console.error);
