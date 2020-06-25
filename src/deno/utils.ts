import { HttpHeaders } from "./core/mod.ts";

export function toHttp4tsHeader(fetchHeaders: Headers): HttpHeaders {
  const entries = [...fetchHeaders.entries()];

  return entries.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
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
