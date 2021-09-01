import { HttpHeaders } from "./core/mod.ts";

export function toHttp4tsHeader(fetchHeaders: Headers): HttpHeaders {
  const entries = [...fetchHeaders.entries()];

  return entries.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
}

export function toHeaders(http4tsHeaders: HttpHeaders): HeadersInit {
  return Object.entries(http4tsHeaders).map(h => {
    let value: string[];
    if (Array.isArray(h[1])) {
      value = h[1];
    } else {
      value = [h[1] ?? ""];
    }
    return [h[0], ...value];
  });
}

export function iteratorToStream(
  iterator: AsyncIterator<Uint8Array | string>
): ReadableStream<any> {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    }
  });
}
