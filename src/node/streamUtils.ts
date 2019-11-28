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
    }
  });
}

export function stringToReadableStream<T>(content: T): ReadableStream<T> {
  return new TheReadablStream<T>({
    start(controller: { enqueue: (arg0: T) => void; close: () => void }) {
      controller.enqueue(content);
      controller.close();
    }
  });
}
