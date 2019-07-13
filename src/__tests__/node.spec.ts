import { createServer, HttpHandler } from "../http4ts";
import { Node } from "../node/node";
import { get } from "request-promise";

async function runOnTestServer(
  handler: HttpHandler,
  testBlock: () => Promise<void>
) {
  const server = createServer(handler, new Node(8080)); // TODO: find a free port
  await server.start();

  try {
    return await testBlock();
  } catch (error) {
    console.error(error.message);
  } finally {
    server.stop();
  }
}

describe("Node Server", () => {
  it("should listen on the given port", async () => {
    const handler: HttpHandler = () => ({
      body: "http4ts",
      headers: {},
      status: 200
    });

    await runOnTestServer(handler, async () => {
      const res = await get("http://localhost:8080/", {
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toBe("http4ts");
    });
  });

  it("should respond correctly when handler throws", async () => {
    const handler: HttpHandler = () => {
      throw new Error("an error occured. (Don't worry. this is expected)");
    };

    await runOnTestServer(handler, async () => {
      const res = await get("http://localhost:8080/", {
        simple: false,
        resolveWithFullResponse: true
      });

      expect(res.statusCode).toBe(500);
    });
  });
});
