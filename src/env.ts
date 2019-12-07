export let TheReadablStream: typeof ReadableStream;
export let TheTextDecoder: typeof TextDecoder;

export function setupEnvironment(
  theReadableStream: typeof ReadableStream,
  theTextDecoder: typeof TextDecoder
) {
  TheReadablStream = theReadableStream;
  TheTextDecoder = theTextDecoder;
}
