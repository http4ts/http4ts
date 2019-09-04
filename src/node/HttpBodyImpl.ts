import { toReadableStream } from "./utils"
import { HttpBody } from "../http"
import { Readable } from "stream";


export class HttpBodyImpl implements HttpBody {
  public readonly stream: ReadableStream
  constructor(nodeHttpRequestStream: Readable) {
    this.stream = toReadableStream(nodeHttpRequestStream)
  }

  async toString() {
    const chunks: any[] = [];
    const reader = this.stream.getReader();

    return new Promise<string>(async (resolve, reject) => {
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            resolve(Buffer.concat(chunks).toString("utf8"))
            break
          }
          chunks.push(value);
        } catch (err) {
          reject(err)
          break;
        }
      }
    });
  }
}