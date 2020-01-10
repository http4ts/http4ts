import { HttpBody } from "../http";
import { TheTextDecoder } from "../env";

export class BufferedBody implements HttpBody {
  constructor(private readonly it: AsyncIterable<Uint8Array>) {}

  async *[Symbol.asyncIterator]() {
    yield* this.it;
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

    return new BufferedBody(gen());
  }
}

export async function asJson<T>(body: HttpBody): Promise<T> {
  const bodyToString = await body.asString();

  return JSON.parse(bodyToString);
}

export function jsonBody(obj: any) {
  const objStr = JSON.stringify(obj);
  return BufferedBody.fromString(objStr);
}

// TODO: Move static function `fromString` out of Body and create StringBody and JsonBody classes
// This can help us to compare body objects easier. See router tests for some examples.
// Then create helper functions for creating body
