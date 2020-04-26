import { req } from "../core/mod.ts";
import { send } from "../client.ts";

const request = req({
  url: "https://api.github.com/users/http4ts/repos",
  headers: {
    "user-agent": "http4ts"
  }
});

async function main() {
  const response = await send(request);
  const body = JSON.parse(await response.body.asString());
  console.log(body);

  console.log(response);
}

await main();
