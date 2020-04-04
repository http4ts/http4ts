import { asJson, stringBody } from "../helpers";

describe("body helpers", () => {
  it("asJson should return json", async () => {
    const person = {
      name: "John"
    };
    const body = stringBody(JSON.stringify(person));

    expect(await asJson(body)).toEqual(person);
  });

  it("should return string when created from a string", async () => {
    const content = "Some content";
    const body = stringBody(content);

    expect(await body.asString()).toEqual(content);
  });
});
