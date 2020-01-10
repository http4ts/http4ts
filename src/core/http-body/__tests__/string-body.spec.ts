import { StringBody } from "../string-body";
import { BufferedBody } from "../../../node";

describe("StringBody", () => {
  it("should be a comparable HttpBody object", () => {
    const body1 = new StringBody("any content");
    const body2 = new StringBody("any content");

    expect(body1).toEqual(body2);
  });

  it("should correctly convert to iterable", async () => {
    const text = "Hello 😌";

    const body = new StringBody(text);
    const bufferedBody = new BufferedBody(body);

    expect(await bufferedBody.asString()).toEqual(text);
  });
});
