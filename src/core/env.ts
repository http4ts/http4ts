export let TheTextDecoder: typeof TextDecoder;
export let TheTextEncoder: typeof TextEncoder;

// this technique does not work in real es6 environment because exported members are not mutable

export function setupEnvironment(
  theTextDecoder: typeof TextDecoder,
  theTextEncoder: typeof TextEncoder
) {
  TheTextDecoder = theTextDecoder;
  TheTextEncoder = theTextEncoder;
}
