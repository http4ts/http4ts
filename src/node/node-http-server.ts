import { Server } from "http";
import { HttpServer } from "../http4ts";
export class NodeHttpServer implements HttpServer {
  constructor(private server: Server, private port: number) {}
  start() {
    return new Promise<void>((resolve, reject) => {
      this.server.listen(this.port, () => resolve());
      this.server.on("error", err => {
        reject(err);
      });
    });
  }
  stop() {
    return new Promise<void>((resolve, reject) => {
      this.server.close(error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}
