import { HttpBody } from "../http.ts";
import { StringBody } from "./string-body.ts";

/**
 * Deserializes the provided body and returns the parsed object.
 * @param body HttpBody to be deserialized
 */
export async function asJson<T>(body: HttpBody): Promise<T> {
  const bodyToString = await body.asString();

  return JSON.parse(bodyToString);
}

/**
 * Creates an HttpBody with the JSON representation of the provided object
 * @param obj Object that should be serialized as JSON for body content
 */
export function jsonBody(obj: any) {
  const objStr = JSON.stringify(obj);
  return stringBody(objStr);
}

/**
 * Creates an HttpBody with the provided content
 * @param content Content of the body
 */
export function stringBody(content: string) {
  return new StringBody(content);
}
