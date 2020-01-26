import { HttpBody } from "../http";
import { StringBody } from "./string-body";

export async function asJson<T>(body: HttpBody): Promise<T> {
  const bodyToString = await body.asString();

  return JSON.parse(bodyToString);
}

export function jsonBody(obj: any) {
  const objStr = JSON.stringify(obj);
  return stringBody(objStr);
}

export function stringBody(content: string) {
  return new StringBody(content);
}
