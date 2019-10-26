import { HttpRequest, HttpResponse } from "../http";

let theFetch: typeof fetch | null = null;

export function setTheFetch(fetchImpl: any) {
  theFetch = fetchImpl;
}

export async function send(req: HttpRequest): Promise<HttpResponse> {
  if (!theFetch) {
    throw new Error("Fetch implementation not found.");
  }

  const resp = await theFetch(req.url, { method: req.method, body: req.body });

  let headers = {};
  resp.headers.forEach(
    (value, key) => (headers = { ...headers, [key]: value })
  );

  return {
    body: await resp.text(),
    headers,
    status: resp.status
  };
}
