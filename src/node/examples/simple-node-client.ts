import { req, send } from "..";

async function main() {
  const request = req({
    url: "https://api.github.com/users/http4ts/repos",
    headers: {
      "user-agent": "http4ts"
    }
  });

  const response = await send(request);

  console.log(JSON.parse(await response.body.asString()));
  console.log(response);
}

main().catch(console.error);
