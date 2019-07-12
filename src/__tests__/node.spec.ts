import { createServer, HttpHandler } from "../http4ts";
import { Node } from "../node";
import { request } from "http";

it("Node should listen on the given port", done => {
  const handler: HttpHandler = () => ({
    body: "http4ts",
    headers: {},
    status: 200
  });

  createServer(handler, new Node(8080)).start();

  request("http://localhost:8080", res => {
    expect(res.statusCode).toBe(200);
    done();
  });
});
