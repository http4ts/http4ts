import { send } from "..";
import { GET } from "../../core/mod";

async function main() {
  const request = GET("https://api.github.com/users/http4ts/repos", {
    "user-agent": "http4ts"
  });

  const response = await send(request);

  console.log(JSON.parse(await response.body.asString()));
  console.log(response);
}

main().catch(console.error);
