export let TheReadablStream: typeof ReadableStream;

export function setupEnvironment(theReadableStream: typeof ReadableStream) {
  TheReadablStream = theReadableStream;
}

export function getEnvironment() {
  return {
    ReadableStream: TheReadablStream
  };
}
