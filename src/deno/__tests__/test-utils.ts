import { HttpHandler } from "../core/mod.ts";
import { serve } from "../deps.ts";
import { toDenoRequestListener } from "../server.ts";

type Fetch = typeof fetch;

export async function runOnTestServer(
  port: number,
  handler: HttpHandler,
  testBlock: (f: Fetch) => Promise<void>
) {
  const server = serve({ port });
  const h = toDenoRequestListener(handler);

  let response: Promise<Response> | undefined;
  const ft = (
    input: string | Request | URL,
    init?: RequestInit | undefined
  ) => {
    response = fetch(input, init);
    return response;
  };

  const test = testBlock(ft);

  for await (const req of server) {
    // This await here, makes the server to process requests synchronously. It is fine for tests but not for realworld applications
    await h(req);
    break;
  }

  server.close();

  await test;

  // Make sure to cancel the body to not leak any resources. Follow https://github.com/denoland/deno/issues/4735 to remove this hack.
  const body = (await response)?.body;
  if (!body?.locked) {
    body?.cancel();
  }
}

export function test(name: string, fn: () => Promise<any>) {
  Deno.test({ name, fn });
}

test.skip = (name: string, fn: () => Promise<any>) => {
  Deno.test({ name, ignore: true, fn });
};

test.only = (name: string, fn: () => Promise<any>) => {
  Deno.test({ name, only: true, fn });
};
