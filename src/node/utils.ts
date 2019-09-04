import { Readable } from "stream";
import { ReadableStream } from "web-streams-polyfill/ponyfill/es2018"

export function toReadableStream(stream: Readable): ReadableStream {
  return new ReadableStream({
    start(controller: ReadableStreamDefaultController) {
      stream.on("data", chunk => controller.enqueue(chunk));
      stream.on("error", error => controller.error(error));
      stream.on("end", () => controller.close());
      stream.on("close", () => { }); //BSH: Handle close here. Close event is firing after end event causing the ReadableStream to throw errors
    },
    cancel(reason) {
      stream.destroy(reason)
    }
  })
}
