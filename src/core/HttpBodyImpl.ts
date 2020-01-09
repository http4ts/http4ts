import { HttpBody } from "./http";
import { TheTextDecoder } from "./env";

export class HttpBodyImpl implements HttpBody {
  constructor(private readonly it: AsyncIterable<Uint8Array>) {}

  async *[Symbol.asyncIterator]() {
    yield* this.it;
  }

  async asJson<T>(): Promise<T> {
    const bodyToString = await this.asString();

    return JSON.parse(bodyToString);
  }

  async asString(encoding = "utf8") {
    const decoder = new TheTextDecoder(encoding);
    let result = "";

    for await (const iterator of this.it) {
      result += decoder.decode(iterator, { stream: true });
    }

    return result;
  }

  public static fromString(content: string) {
    const contentArr = [...content].map(ch => ch.charCodeAt(0));

    async function* gen() {
      yield new Uint8Array(contentArr);
    }

    return new HttpBodyImpl(gen());
  }

  public static json(obj: any) {
    const objStr = JSON.stringify(obj);
    return this.fromString(objStr);
  }
}
