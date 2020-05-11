import { HttpBody } from "../http.ts";
import { stringToIterable } from "./string-encoding-utils.ts";

export class StringBody implements HttpBody {
  constructor(private readonly content: string) {}

  async asString(): Promise<string> {
    return this.content;
  }

  async *[Symbol.asyncIterator]() {
    yield* stringToIterable(this.content);
  }
}
