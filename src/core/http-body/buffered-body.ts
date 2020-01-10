import { HttpBody } from "../http";
import { iterableToString } from "./string-encoding-utils";
import { StringBody } from "./string-body";

export class BufferedBody implements HttpBody {
  constructor(private readonly it: AsyncIterable<Uint8Array>) {}

  async *[Symbol.asyncIterator]() {
    yield* this.it;
  }

  async asString(encoding = "utf8") {
    return iterableToString(this.it, encoding);
  }
}

export async function asJson<T>(body: HttpBody): Promise<T> {
  const bodyToString = await body.asString();

  return JSON.parse(bodyToString);
}

export function jsonBody(obj: any) {
  const objStr = JSON.stringify(obj);
  return new StringBody(objStr);
}
