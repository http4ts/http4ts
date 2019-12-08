export let TheReadablStream: typeof ReadableStream;
export let TheTextDecoder: typeof TextDecoder;

export function setupEnvironment(
  theReadableStream: typeof ReadableStream,
  theTextDecoder: any
) {
  TheReadablStream = theReadableStream;
  TheTextDecoder = theTextDecoder as typeof TextDecoder;
}
