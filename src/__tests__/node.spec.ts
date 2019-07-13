import { createServer, HttpHandler } from "../http4ts";
import { Node } from "../node";
import { get } from "request-promise";

describe("Node Server", () => {
  it("should listen on the given port", async () => {
    const handler: HttpHandler = () => ({
      body: "http4ts",
      headers: {},
      status: 200
    });

    const server = createServer(handler, new Node(8080));
    await server.start();

    const res = await get("http://localhost:8080/", {
      resolveWithFullResponse: true
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toBe("http4ts");

    server.stop();
  });
});
