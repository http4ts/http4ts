export let TheReadableStream: typeof ReadableStream;
export let TheTextDecoder: typeof TextDecoder;

export function setupEnvironment(
  theReadableStream: typeof ReadableStream,
  theTextDecoder: typeof TextDecoder
) {
  TheReadableStream = theReadableStream;
  TheTextDecoder = theTextDecoder as typeof TextDecoder;
}
