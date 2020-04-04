import { TextEncoder } from "util";

import { stringToIterable, iterableToString } from "../string-encoding-utils";

const encoder = new TextEncoder();

describe("string-iterable conversions", () => {
  it("should correctly convert string to iterable and vice versa", async () => {
    const text = "Hello 😌";
    const it = stringToIterable(text);

    expect(await iterableToString(it)).toEqual(text);
  });
});

describe("iterableToString", () => {
  it("should correctly convert string iterables", async () => {
    async function* gen() {
      yield "Hello ";
      yield "world ";
      yield "😌";
    }

    expect(await iterableToString(gen())).toBe("Hello world 😌");
  });

  it("should correctly convert Uint8Array iterables", async () => {
    async function* gen() {
      yield encoder.encode("Hello ");
      yield encoder.encode("world ");
      yield encoder.encode("😌");
    }

    expect(await iterableToString(gen())).toBe("Hello world 😌");
  });
});
