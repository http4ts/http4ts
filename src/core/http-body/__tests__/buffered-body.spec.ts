import { BufferedBody } from "../buffered-body";
import { stringToIterable } from "../string-encoding-utils";

describe("BufferedBody", () => {
  it("should correctly decode iterable contents when converting to string", async () => {
    const it = stringToIterable("Hello 😌");
    const body = new BufferedBody(it);

    expect(await body.asString()).toEqual("Hello 😌");
  });

  it("should correctly decode string contents when converting to string", async () => {
    async function* gen() {
      yield "Hello 😌";
    }

    const body = new BufferedBody(gen());

    expect(await body.asString()).toEqual("Hello 😌");
  });
});
