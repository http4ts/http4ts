import { HttpBody } from "../http";
import { stringToIterable } from "./string-encoding-utils";

export class StringBody implements HttpBody {
  constructor(private readonly content: string) {}

  async asString(): Promise<string> {
    return this.content;
  }

  async *[Symbol.asyncIterator]() {
    yield* stringToIterable(this.content);
  }
}
