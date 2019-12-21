import { TheReadableStream } from "../env";

export function stringToReadableStream(content: string): ReadableStream {
  return new TheReadableStream({
    start(controller: { enqueue: (arg0: string) => void; close: () => void }) {
      controller.enqueue(content);
      controller.close();
    }
  });
}
