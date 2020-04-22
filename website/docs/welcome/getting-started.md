---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

*Http4ts* is a minimal HTTP library for JavaScript environments ([Node.js](https://nodejs.org), [Deno](https://Deno.land/) etc.) implementing the pattern of server as a function. In *http4ts*, a server is just a function with the following signature:

```ts
type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
```

A simple server application can be found in the [examples directory](https://github.com/http4ts/http4ts/tree/master/src/examples).

# Using in Node.js

## Installation

*Http4ts* is available via npm. You can install it using the following command:

```
npm install http4ts
```

## Binding to Node.js

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
