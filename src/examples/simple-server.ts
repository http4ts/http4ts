import { HttpRequest, HttpResponse } from "../http";
import { createServer } from "../http4ts";
import { Node } from "../node/node";
import { HttpBodyImpl } from "../node/HttpBodyImpl";

interface Person {
  name: string;
}

async function handler(req: HttpRequest): Promise<HttpResponse> {
  const person = await req.body.asJson<Person>();
  person.name;

  return {
    body: HttpBodyImpl.fromString(person.name),
    headers: {},
    status: 200
  };
}

async function main() {
  await createServer(handler, new Node(8080)).start();
}

main().catch(console.error);
