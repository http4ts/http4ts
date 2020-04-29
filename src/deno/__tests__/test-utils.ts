import { HttpHandler } from "../core/mod.ts";
import { serve } from "../imports.ts";
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
    await h(req);
    break;
  }

  if (response) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    (await response).arrayBuffer(); // Should be called to close httpBody Resouce. See https://github.com/denoland/deno/issues/4735
  }

  server.close();

  await test;
}

export function test(name: string, fn: () => Promise<any>) {
  Deno.test({ name, fn });
}

test.skip = (name: string, fn: () => Promise<any>) => {
  Deno.test({ name, ignore: true, fn });
};
