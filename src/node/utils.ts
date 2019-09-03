import { Readable } from "stream";

export function streamToString(stream: Readable): Promise<string> {
  const chunks: any[] = [];

  return new Promise((resolve, reject) => {
    stream.on("data", chunk => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

export function toReadableStream(stream: Readable): ReadableStream{
  return new ReadableStream({
    start(controller: ReadableStreamDefaultController){
      stream.on("data", chunk => controller.enqueue(chunk));
      stream.on("error", error => controller.error(error));
      stream.on("end", () => controller.close());
      stream.on("close", () => controller.close());
    },
    cancel(reason){
      stream.destroy(reason)
    }
  })
}
