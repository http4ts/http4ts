---
id: your-first-handler
title: Your First Handler
sidebar_label: Your First Handler
---

Handler is the heart of http4ts. An HttpHandler connects your logic code to the library. A handler is a function that receives a request object and should return a response object:

```ts
type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
```

As an example, the following handler echoes the request body to the response:

```ts
async function handler(req: HttpRequest /* 1 */) {
  return res({ /* 2 */
    status: HttpStatus.OK,
    body: req.body /* 3 */
  });
}
```

1. The handler receives a request object 
2. It should return a response object. `res` is a helper function that creates a response object.
3. The request object has fields and methods to read and manipulate it. Three most important request object fields are `body`, `headers`, and `method`. Here we passed `body` to response.

:::note
A handler should bind to a server in order to be used. You will learn about binding to server in the [next article](binding-to-node-js-server.md).
:::

