import { HttpBodyImpl, asJson } from "../HttpBodyImpl";

async function* stringToIterable(content: string) {
  const data = [...content].map(ch => ch.charCodeAt(0));
  for (const el of data) {
    yield new Uint8Array([el]);
  }
}

describe("HttpBodyImpl", () => {
  it("asJson should return json", async () => {
    const person = {
      name: "John"
    };
    const body = HttpBodyImpl.fromString(JSON.stringify(person));

    expect(await asJson(body)).toEqual(person);
  });

  it("should return string when created from a string", async () => {
    const content = "Some content";
    const body = HttpBodyImpl.fromString(content);

    expect(await body.asString("utf8")).toEqual(content);
  });

  it("should correctly decode iterable contents when converting to string", async () => {
    const it = stringToIterable("Hello");
    const body = new HttpBodyImpl(it);

    expect(await body.asString()).toEqual("Hello");
  });
});
