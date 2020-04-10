import * as stream from "stream";
import { writeIterableToStream } from "../node-stream-utils";
import { TextDecoder } from "util";

function utfToString(arr: Buffer): string {
  const decoder = new TextDecoder("utf8");
  return decoder.decode(arr);
}

async function* gen(strs: string[]) {
  const data = strs.map(x => Buffer.from(x, "utf8"));
  for (const el of data) {
    yield new Uint8Array(el);
  }
}

async function* stringGen(strs: string[]) {
  for (const el of strs) {
    yield el;
  }
}

describe("node-stream-utils", () => {
  test("writeIterableToStream should pipe Uint8Array iterable to stream", async () => {
    const strs = ["Hello", "World", "😌"];

    const results: string[] = [];

    class TestWritable extends stream.Writable {
      _write(c: any, enc: string, next: (error?: Error | null) => void) {
        results.push(utfToString(c));
        next();
      }
    }
    const writer = new TestWritable();
    writer.on("finish", () => {
      expect(results).toEqual(strs);
    });

    await writeIterableToStream(gen(strs), writer);
  });

  test("writeIterableToStream should pipe string iterable to stream", async () => {
    const strs = ["Hello", "World", "😌"];

    const results: string[] = [];

    class TestWritable extends stream.Writable {
      _write(c: any, enc: string, next: (error?: Error | null) => void) {
        results.push(utfToString(c));
        next();
      }
    }
    const writer = new TestWritable();
    writer.on("finish", () => {
      expect(results).toEqual(strs);
    });

    await writeIterableToStream(stringGen(strs), writer);
  });

  test("writeIterableToStream should end stream after piping all data", done => {
    const strs = ["Hello", "World", "😌"];

    class TestWritable extends stream.Writable {
      _write(c: any, enc: string, next: (error?: Error | null) => void) {
        next();
      }
      _final() {
        done();
      }
    }

    writeIterableToStream(gen(strs), new TestWritable());
  });
});
