import { HttpHandler } from "../core/mod.ts";
import { handleDenoRequest } from "../server.ts";

type Fetch = typeof fetch;

export async function runOnTestServer(
  port: number,
  handler: HttpHandler,
  testBlock: (f: Fetch) => Promise<void>
) {
  const listener = Deno.listen({ port });
  const conn = listener.accept();
  let requests: any;

  (async () => {
    requests = Deno.serveHttp(await conn);
    const req = await requests.nextRequest();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await handleDenoRequest(handler, req!);
  })();

  let response: Promise<Response> | undefined;
  const ft = (
    input: string | Request | URL,
    init?: RequestInit | undefined
  ) => {
    response = fetch(input, init);
    return response;
  };

  await testBlock(ft);

  const r = await response;
  if (!r?.body?.locked) {
    r?.body?.cancel();
  }
  requests.close();
  listener.close();
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
