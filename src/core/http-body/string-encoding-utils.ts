import { TheTextDecoder, TheTextEncoder } from "../env";

export async function* stringToIterable(content: string) {
  const encoder = new TheTextEncoder();
  yield encoder.encode(content);
}

export async function iterableToString(
  it: AsyncIterable<Uint8Array>,
  encoding = "utf8"
) {
  const decoder = new TheTextDecoder(encoding);
  let result = "";

  for await (const chunk of it) {
    result += decoder.decode(chunk, { stream: true });
  }

  return result;
}
