import * as http from "http";
import { toNodeRequestListener } from "./server";
import { HttpHandler } from "../core/http4ts";

export async function runOnTestServer(
  port: number,
  handler: HttpHandler,
  testBlock: () => Promise<void>
) {
  const server = http.createServer(toNodeRequestListener(handler));

  return new Promise((resolve, reject) => {
    server.listen(port, "127.0.0.1", async () => {
      try {
        const testResult = await testBlock();
        resolve(testResult);
      } catch (error) {
        console.error(error.message);
        reject(error);
      } finally {
        server.close();
      }
    });
  });
}
