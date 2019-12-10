import { Readable } from "stream";
import { TheReadableStream } from "../env";

export function toReadableStream(stream: Readable): ReadableStream {
  return new TheReadableStream({
    start(controller) {
      stream.pause();
      stream.on("data", chunk => {
        controller.enqueue(chunk);
        stream.pause();
      });
      stream.on("end", () => controller.close());
      stream.on("error", e => controller.error(e));
    },
    pull() {
      stream.resume();
    },
    cancel() {
      stream.pause();
    }
  });
}
