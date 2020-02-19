import { createHttpClient } from "../core/http-client";
import fetch from "node-fetch";
import { req } from "../node";

async function main() {
  const send = createHttpClient(fetch);
  const request = req({ url: "https://api.github.com/users/http4ts/repos" });

  const response = await send(request);

  console.log(response);
}

main().catch(console.error);
