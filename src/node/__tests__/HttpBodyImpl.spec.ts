import { Readable } from "stream";
import { HttpBodyImpl } from "../HttpBodyImpl";
import { toReadableStream } from "../streamUtils";

describe("HttpBodyImpl", () => {
  it("should be return json", async () => {
    const person = {
      name: "John"
    };
    const body = HttpBodyImpl.fromString(JSON.stringify(person));

    expect(await body.asJson()).toEqual(person);
  });

  it("should return string when created from a string", async () => {
    const content = "Some content";
    const body = HttpBodyImpl.fromString(content);

    expect(await body.asString("utf8")).toEqual(content);
  });

  it("should return string when created from a node stream", async () => {
    const content = "Some content";
    const nodeStream = new Readable();
    nodeStream.push(content);
    nodeStream.push(null); //indicates the end of stream 🤷

    const body = new HttpBodyImpl(toReadableStream(nodeStream));

    expect(await body.asString("utf8")).toEqual(content);
  });
});
