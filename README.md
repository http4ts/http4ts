# http4ts
**Server as a Function HTTP toolkit for TypeScript**

[![Actions Status](https://github.com/http4ts/http4ts/workflows/Node%20CI/badge.svg)](https://github.com/http4ts/http4ts/actions)
[![codecov](https://codecov.io/gh/http4ts/http4ts/branch/master/graph/badge.svg)](https://codecov.io/gh/http4ts/http4ts)

http4ts is a minimal HTTP library for JavaScript environments ([Node.js](https://nodejs.org), [Deno](https://Deno.land/) etc.) implementing the pattern of server as a function. In http4ts, a server is just a function with the following signature:
``` ts
type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
```
A simple server application can be found in the [examples directory](https://github.com/http4ts/http4ts/tree/master/src/examples).

## Philosophy

http4ts aims to obey the following rules as its base architectural mindset:
* **Server as a Function**: This library is based on the Twitter paper [Your Server as a Function](https://monkey.org/~marius/funsrv.pdf) and inspired by the fantastic [http4k](https://github.com/http4k/http4k/) library. An HTTP server application is a composition of two main types:
    * `HttpHandler`: defines the functions that handle requests.
    * `HttpFilter`: a higher-order function that accepts an `HttpHandler` and returns an `HttpHandler`. It should be used to add request/response pre-/post-processing.
* **Runtime Independence**: While the library has bindings to be used with a Node.js runtime, the core library does not have any dependency on the Node.js environment. It should be possible to use it for both Node.js and Deno.
* **Symmetric**: Similar to http4k, this library supports symmetric interfaces for the HTTP client and HTTP server. It is possible to reuse the same `HttpHandler` interface and all the filters on both server- and client-side. There is an `HttpClient` functionality available in the library which follows the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) interface and is independent of any runtime.
* **Type Safety**: http4ts is built using the maximum type safety power of [TypeScript](https://www.typescriptlang.org/) and, in order to use its maximum power, you should do the same.
* **Immutability**: Similar to http4k, all entities in the library are immutable unless, naturally, it is not possible.
* **Testability**: Since the basic building blocks of this library are functions and the main entities are abstracted from the environment, it is extremely simple to write tests for the code built by http4ts.
* **Minimal** The request and response contain only the necessary information to represent the HTTP message. Extra information such as session and cookies are not included because they don't belong to the HTTP protocol.
* **Composable** All the building blocks are composable which is a great addition to code reusability, organization and extension.

***Http4ts data-flows***

![Https Data Flows](https://raw.githubusercontent.com/http4ts/http4ts/master/doc/asset/diagram.png)

## Using in Node.js

### Installation

*Http4ts* is available via npm. You can install it using the following command:

```
npm install http4ts
```

### Binding to Node.js

In order to use this library in Node.js, you have to bind the `HttpHandler` to the Node.js HTTP server. *Http4ts* supplies a function called [`toNodeRequestListener`](https://github.com/http4ts/http4ts/blob/master/src/node/server.ts) to bind an `HttpHandler` to the Node.js server.

```ts
import * as http from "http";

import {
  HttpRequest,
  HttpStatus,
  toNodeRequestListener,
  stringBody,
  res
} from "http4ts";

async function handler(req: HttpRequest) {  // 1. Write the handler as a function that returns response
  return res({
    body: stringBody("Hello world!"),
    status: HttpStatus.OK
  });
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

## Example Project

We have implemented the famous [realworld backend](https://github.com/gothinkster/realworld) for you to compare the code with other http libraries in node.js. You can find this example [here](https://github.com/http4ts/http4ts-realworld-example-app).
