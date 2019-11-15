import { Readable } from "stream";
import { ReadableStream } from "web-streams-polyfill/ponyfill/es2018";

export function toReadableStream(stream: Readable): ReadableStream {
  return new ReadableStream({
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

export function stringToReadableStream(content: string): ReadableStream {
  return new ReadableStream({
    start(controller) {
      controller.enqueue(content);
      controller.close();
    }
  });
}
