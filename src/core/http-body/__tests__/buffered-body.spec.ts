import { BufferedBody, asJson } from "../buffered-body";
import { stringToIterable } from "../string-encoding-utils";
import { StringBody } from "../string-body";

describe("HttpBodyImpl", () => {
  it("asJson should return json", async () => {
    const person = {
      name: "John"
    };
    const body = new StringBody(JSON.stringify(person));

    expect(await asJson(body)).toEqual(person);
  });

  it("should return string when created from a string", async () => {
    const content = "Some content";
    const body = new StringBody(content);

    expect(await body.asString()).toEqual(content);
  });

  it("should correctly decode iterable contents when converting to string", async () => {
    const it = stringToIterable("Hello");
    const body = new BufferedBody(it);

    expect(await body.asString()).toEqual("Hello");
  });
});
