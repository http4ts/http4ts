import { BufferedBody } from "../../../node";
import { stringBody } from "../helpers";

describe("StringBody", () => {
  it("should be a comparable HttpBody object", () => {
    const body1 = stringBody("any content");
    const body2 = stringBody("any content");

    expect(body1).toEqual(body2);
  });

  it("should correctly convert to iterable", async () => {
    const text = "Hello 😌";

    const body = stringBody(text);
    const bufferedBody = new BufferedBody(body);

    expect(await bufferedBody.asString()).toEqual(text);
  });
});
