import { HttpBody } from "./http";
import { stringToReadableStream } from "./utils";
import { TheTextDecoder } from "./env";

export class HttpBodyImpl implements HttpBody {
  constructor(public readonly stream: ReadableStream) {}

  public static fromString(content: string): HttpBody {
    return new HttpBodyImpl(stringToReadableStream(content));
  }

  async asJson<T>(): Promise<T> {
    const bodyToString = await this.asString();

    return JSON.parse(bodyToString);
  }

  async asString(encoding = "utf8") {
    const reader = this.stream.getReader();
    const decoder = new TheTextDecoder(encoding);
    let content = "";

    return new Promise<string>(async (resolve, reject) => {
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            resolve(content);
            break;
          }
          if (typeof value === "string") {
            content += value;
          } else {
            content += decoder.decode(value);
          }
        } catch (err) {
          reject(err);
          break;
        }
      }
    });
  }
}
