import { Readable } from "stream";
import { ReadableStream } from "web-streams-polyfill/ponyfill/es2018"

export function toReadableStream(stream: Readable): ReadableStream {
  let streamClosedAlready = false;
  return new ReadableStream({
    start(controller: ReadableStreamDefaultController) {
      stream.on("data", chunk => {
        controller.enqueue(chunk);
      });
      stream.on("error", error => controller.error(error));
      stream.on("end", () => {
        if (!streamClosedAlready) {
          controller.close()
          streamClosedAlready = true;
        }
      });
      stream.on("close", () => {
        if (!streamClosedAlready) {
          controller.close()
          streamClosedAlready = true;
        }
      });
    },
    cancel(reason) {
      stream.destroy(reason)
    }
  })
}
