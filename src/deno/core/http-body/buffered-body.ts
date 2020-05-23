import { HttpBody } from "../http.ts";
import { iterableToString } from "./string-encoding-utils.ts";

export class BufferedBody implements HttpBody {
  constructor(private readonly it: AsyncIterable<Uint8Array | string>) {}

  async *[Symbol.asyncIterator]() {
    yield* this.it;
  }

  async asString(encoding = "utf8") {
    return iterableToString(this.it, encoding);
  }
}
