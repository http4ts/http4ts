# http4ts
**Server as a Function http toolkit for Typescript**

[![Actions Status](https://github.com/http4ts/http4ts/workflows/Node%20CI/badge.svg)](https://github.com/http4ts/http4ts/actions)

http4ts is a minimal http library for Javascript environments (nodejs, deno etc.) implementing the pattern of server as a function. In http4ts a server is just a function with the following signature:
``` ts
type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
```
A simple server application can be found in [examples directory](https://github.com/http4ts/http4ts/tree/master/src/examples).

## Philosophy

http4ts aims to obey the following rules as its base architectural mindset:
* **Server as a Function**: This library is based on the Twitter paper [Your Server as a Function](https://monkey.org/~marius/funsrv.pdf) and inspired by fantastic [http4k](https://github.com/http4k/http4k/) library. A http server application is a composition of two main types:
    * `HttpHandler`: which defines the functions that handle requests.
    * `HttpFilter`: Which is a higher order function that accepts a `HttpHandler` and returns a `HttpHandler`. It should be used to add request/response pre/post processing.
* **Runtime Independence**: While the library has bindings to be used in nodejs runtime, the core library does not have any dependency to nodejs environment. It should be possible to use it for both nodejs and deno.
* **Symmetric**: Similar to http4k, this library supports symmetric interfaces for http client and http server. It is possible to reuse the same `HttpHandler` interface and all the filters on both server and client side. There is a `HttpClient` functionality available in the library which follows the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) interface and is independent of runtime.
* **Type Safety**: http4ts is built using the maximum type safety power of Typescript and in order to use its maximum power you should do the same.
* **Immutability**: Similar to http4k, all entities in the library are immutable unless naturally it is not possible.
* **Testability**: Since the basic building blocks of this library are functions and the main entities are abstracted from the environment, it is exteremely simple to write tests for the code built by http4ts.

## Binding to nodejs

### Http Server

In order to use this library in nodejs, you have to bind the `HttpHandler` to nodejs' http server. `toNodeRequestListener` binds `HttpHandler` to nodejs' server.

``` ts
import * as http from "http";

import { HttpRequest, HttpResponse, HttpStatus } from "../http";
import { toNodeRequestListener } from "../node/server";

async function handler(req: HttpRequest): Promise<HttpResponse> {
  return {
    body: req.url,
    headers: {},
    status: HttpStatus.OK
  };
}

const server = http.createServer(toNodeRequestListener(handler));

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

It is possible to bind http4ts to any nodejs server framework in any level. For example, you can bind it to expressjs after or before routing logic. This helps to gradually adopt your existing code to this architecture.
