export let TheTextDecoder: typeof TextDecoder;

// this technique does not work in real es6 environment because exported members are not mutable

export function setupEnvironment(theTextDecoder: typeof TextDecoder) {
  TheTextDecoder = theTextDecoder as typeof TextDecoder;
}
