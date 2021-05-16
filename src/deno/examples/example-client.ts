import { GET } from "../core/mod.ts";
import { send } from "../client.ts";

const request = GET("https://api.github.com/users/http4ts/repos", {
  "user-agent": "http4ts"
});

async function main() {
  const response = await send(request);
  const body = JSON.parse(await response.body.asString());
  console.log(body);

  console.log(response);
}

await main();
