export async function* stringToIterable(content: string) {
  const encoder = new TextEncoder();
  yield encoder.encode(content);
}

export async function iterableToString(
  it: AsyncIterable<Uint8Array | string>,
  encoding = "utf8"
) {
  const decoder = new TextDecoder(encoding);
  let result = "";

  for await (const chunk of it) {
    result += typeof chunk === "string" ? chunk : decoder.decode(chunk);
  }

  return result;
}
