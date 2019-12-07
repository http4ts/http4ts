import { Readable } from "stream";
import { toReadableStream } from "../streamUtils";
import { stringToReadableStream } from "../../utils/stringToReadableStream";

describe("stream conversion", () => {
  it("converts a node stream to ReadableStream", async () => {
    const content = "Some content";
    const nodeStream = new Readable();
    nodeStream.push(content);
    nodeStream.push(null); //indicates the end of stream 🤷

    const readableStream = toReadableStream(nodeStream);
    const reader = readableStream.getReader();
    const { value } = await reader.read();

    expect(value.toString()).toEqual(content);
  });

  it("converts a string to a ReadableStream", async () => {
    const content = "Some content";
    const readableStream = stringToReadableStream(content);
    const reader = readableStream.getReader();
    const { value } = await reader.read();

    expect(value).toEqual(content);
  });
});
