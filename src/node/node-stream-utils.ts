import * as util from "util";
import * as stream from "stream";
import { once } from "events";

export const waitToFinish = util.promisify(stream.finished);

export async function writeIterableToStream(
  iterable: AsyncIterable<Uint8Array>,
  target: stream.Writable
) {
  for await (const chunk of iterable) {
    if (!target.write(Buffer.from(chunk))) {
      await once(target, "drain");
    }
  }
  target.end();
  await waitToFinish(target);
}
