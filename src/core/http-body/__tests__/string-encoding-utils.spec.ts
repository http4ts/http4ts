import { stringToIterable, iterableToString } from "../string-encoding-utils";

describe("string-iterable conversions", () => {
  it("should correctly convert string to iterable and vice versa", async () => {
    const text = "Hello 😌";
    const it = stringToIterable(text);

    expect(await iterableToString(it)).toEqual(text);
  });
});
