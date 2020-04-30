import { HttpHeaders } from "./core/mod.ts";

export function toHttp4tsHeader(fetchHeaders: Headers): HttpHeaders {
  const entries = [...fetchHeaders.entries()];

  return entries.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
}

// Not implemented for body in Deno yet: https://github.com/denoland/deno/blob/0c47cd67850e4c195212c8edfcb3a62b8435ed3a/cli/js/web/fetch.ts#L242-L244
export async function* toAsyncIterator(
  stream: ReadableStream<Uint8Array> | null
) {
  if (!stream) {
    return undefined;
  }
  // Get a lock on the stream
  const reader = stream.getReader();

  try {
    while (true) {
      // Read from the stream
      const { done, value } = await reader.read();
      // Exit if we're done
      if (done) return;
      // Else yield the chunk
      if (value) yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

export async function* readerToAsyncIterator(
  reader: Deno.Reader,
  chunkSize: number | null
) {
  while (true) {
    const arr = new Uint8Array(chunkSize || 10); // TODO: How to find the right chunk amount?
    const count = await reader.read(arr);

    if (count === null) {
      break;
    } else {
      yield arr;
    }
  }
}

const encoder = new TextEncoder();

export function iterableToReadableStream(
  iterable: AsyncIterable<Uint8Array | string>
) {
  const it = iterable[Symbol.asyncIterator]();
  return {
    async read(p: Uint8Array) {
      const res = await it.next();
      if (res.done) {
        return null;
      } else {
        const v = res.value;
        if (typeof v === "string") {
          p.set(encoder.encode(v));
        } else {
          p.set(v);
        }
        return res.value.length;
      }
    }
  };
}
