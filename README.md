# http4ts

**Server as a Function HTTP toolkit for TypeScript**

[![Node](https://github.com/http4ts/http4ts/workflows/Node/badge.svg)](https://github.com/http4ts/http4ts/actions?query=workflow%3ANode)
[![Deno](https://github.com/http4ts/http4ts/workflows/Deno/badge.svg)](https://github.com/http4ts/http4ts/actions?query=workflow%3ADeno)
[![codecov](https://codecov.io/gh/http4ts/http4ts/branch/master/graph/badge.svg)](https://codecov.io/gh/http4ts/http4ts)

http4ts is a minimal HTTP library for JavaScript environments ([Node.js](https://nodejs.org), [Deno](https://Deno.land/) etc.) implementing the pattern of server as a function. In http4ts, a server is just a function with the following signature:

```ts
type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
```

See the simple server application examples, one for [deno](https://github.com/http4ts/http4ts/tree/master/src/deno/examples) and another for [Node.js](https://github.com/http4ts/http4ts/tree/master/src/node/examples).

## Using in Node.js

### Installation

_Http4ts_ is available via npm. You can install it using the following command:

```
npm install http4ts
```

### Binding to Node.js

In order to use this library in Node.js, you have to bind the `HttpHandler` to the Node.js HTTP server. _Http4ts_ supplies a function called [`toNodeRequestListener`](https://github.com/http4ts/http4ts/blob/master/src/node/server.ts) to bind an `HttpHandler` to the server.

```ts
import * as http from "http";

import {
  HttpRequest,
  toNodeRequestListener,
  OK
} from "http4ts";

async function handler(req: HttpRequest) {  // 1. Write the handler as a function that returns response
  return OK({ body: "Hello world!" });
}

const server = http.createServer(
  toNodeRequestListener(handler)            // 2. Connect the handler to the node.js server
);

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {       // 3. Start your node server as you were before
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Using in Deno

### Installation

In Deno, it is possible to import the library via its url. You can use _Http4ts_ by importing the following url:

```
https://deno.land/x/http4ts/mod.ts
```

### Binding to Deno

In order to use this library in Deno, you have to bind the `HttpHandler` to the Deno HTTP server. _Http4ts_ supplies a function called [`toDenoRequestListener`](https://github.com/http4ts/http4ts/blob/master/src/deno/server.ts) to bind an `HttpHandler` to the server.

```ts
import { listenAndServe } from "https://deno.land/std/http/server.ts";

import {
  HttpRequest,
  toDenoRequestListener,
  OK
} from "https://deno.land/x/http4ts/mod.ts";

async function handler(req: HttpRequest) {  // 1. Write the handler as a function that returns response
  return OK({ body: "Hello world!" });
}

console.log("Listening on http://localhost:8000");
await listenAndServe({ port: 8000 }, toDenoRequestListener(handler));
```

You can also run this example by executing the following command in your shell environment:

```
deno run --allow-net=0.0.0.0:8000 https://deno.land/x/http4ts/examples/readme-example.ts
```

## Philosophy

http4ts aims to obey the following rules as its base architectural mindset:

- **Server as a Function**: This library is based on the Twitter paper [Your Server as a Function](https://monkey.org/~marius/funsrv.pdf) and inspired by the fantastic [http4k](https://github.com/http4k/http4k/) library. An HTTP server application is a composition of two main types:
  - `HttpHandler`: defines the functions that handle requests.
  - `HttpFilter`: a higher-order function that accepts an `HttpHandler` and returns an `HttpHandler`. It should be used to add request/response pre-/post-processing.
- **Runtime Independence**: This library has bindings for both [Node.js](https://nodejs.org/) and [Deno](https://deno.land/) runtimes.
- **Symmetric**: Similar to http4k, this library supports symmetric interfaces for the HTTP client and HTTP server. It is possible to reuse the same `HttpHandler` interface and all the filters on both server- and client-side. There is an `HttpClient` functionality available in the library which follows the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) interface and is independent of any runtime.
- **Type Safety**: http4ts is built using the maximum type safety power of [TypeScript](https://www.typescriptlang.org/) and, in order to use its maximum power, you should do the same.
- **Immutability**: Similar to http4k, all entities in the library are immutable unless, naturally, it is not possible.
- **Testability**: Since the basic building blocks of this library are functions and the main entities are abstracted from the environment, it is extremely simple to write tests for the code built by http4ts.
- **Minimal** The request and response contain only the necessary information to represent the HTTP message. Extra information such as session and cookies are not included because they don't belong to the HTTP protocol.
- **Composable** All the building blocks are composable which is a great addition to code reusability, organization and extension.

**_Http4ts data-flows_**

![Https Data Flows](https://raw.githubusercontent.com/http4ts/http4ts/master/doc/asset/diagram.png)

## Example Project

We have implemented the famous [realworld backend](https://github.com/gothinkster/realworld) for you to compare the code with other http libraries in node.js. You can find this example [here](https://github.com/http4ts/http4ts-realworld-example-app).
