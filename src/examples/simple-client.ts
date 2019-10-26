import { HttpRequest } from "../http";
import { send, setTheFetch } from "../send/send";
import fetch from "node-fetch";

async function main() {
  setTheFetch(fetch);

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
