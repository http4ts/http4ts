import { HttpBody } from "../http";
import { iterableToString } from "./string-encoding-utils";

export class BufferedBody implements HttpBody {
  constructor(private readonly it: AsyncIterable<Uint8Array>) {}

  async *[Symbol.asyncIterator]() {
    yield* this.it;
  }

  async asString(encoding = "utf8") {
    return iterableToString(this.it, encoding);
  }
}
