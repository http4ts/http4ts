import { HttpBody } from "../http";
import { stringToReadableStream } from "./utils";
import { TheTextEncoder } from "../env";

export class HttpBodyImpl implements HttpBody {
  constructor(public readonly stream: ReadableStream) {}

  public static fromString(content: string): HttpBody {
    return new HttpBodyImpl(stringToReadableStream(content));
  }

  async asJson<T>(): Promise<T> {
    const bodyToString = await this.asString();

    return JSON.parse(bodyToString);
  }

  async asString(encoding: string = "utf8") {
    const chunks: any[] = [];
    const reader = this.stream.getReader();

    return new Promise<string>(async (resolve, reject) => {
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            resolve(Buffer.concat(chunks).toString(encoding));
            break;
          }
          if (typeof value === "string") {
            const encoder = new TheTextEncoder();
            chunks.push(encoder.encode(value));
          } else {
            chunks.push(value);
          }
        } catch (err) {
          reject(err);
          break;
        }
      }
    });
  }
}
