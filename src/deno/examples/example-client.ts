import { GET, HttpMethods } from "../core/mod.ts";
import { send } from "../client.ts";

const request = GET({
  url: "https://api.github.com/users/http4ts/repos",
  headers: {
    "user-agent": "http4ts"
  }
});

async function main() {
  console.log(HttpMethods.GET)
  const response = await send(request);
  const body = JSON.parse(await response.body.asString());
  console.log(body);

  console.log(response);
}

await main();
