import { Readable } from "stream";
import { TheReadablStream } from "../env";

export function toReadableStream(stream: Readable): ReadableStream {
  return new TheReadablStream({
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
    },
  });
}

export function stringToReadableStream(content: string): ReadableStream {
  return new TheReadablStream({
    start(controller: { enqueue: (arg0: string) => void; close: () => void }) {
      controller.enqueue(content);
      controller.close();
    },
  });
}
