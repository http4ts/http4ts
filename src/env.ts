export let TheReadablStream: typeof ReadableStream;
export let TheTextEncoder: typeof TextEncoder;

export function setupEnvironment(
  theReadableStream: typeof ReadableStream,
  theTextEncoder: typeof TextEncoder
) {
  TheReadablStream = theReadableStream;
  TheTextEncoder = theTextEncoder;
}

export function getEnvironment() {
  return {
    ReadableStream: TheReadablStream,
    TextEncoder: TheTextEncoder
  };
}
