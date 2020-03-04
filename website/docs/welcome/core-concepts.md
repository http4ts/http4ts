---
id: core-concepts
title: Core Concepts
sidebar_label: Core Concepts
---

*Http4ts* consists of only two concepts. You can build everything you need for an http server by composing these two concepts.

## HttpHandler

A HttpHandler is a function that accepts a request and returns a response:

```ts
type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
```

For example, all of the following examples can be modelled as `HttpHandler`:

- A `loginHandler`: receives the user credentials and responds with the success result and a token or with a rejection result.
- A router: receives the request and based on the url in the request, finds the handler associated with the url pattern of the request, then sends the request to that handler and returns the response returned from that handler.
- A node.js server: receives the request and responds to it based on its defined behavior.

In *http4ts*, all of the above examples are just functions with the same signature.

## HttpFilter

A HttpFilter is a higher-order function which accepts a `HttpHandler` and returns another `HttpHandler`:

```ts
type HttpFilter = (handler: HttpHandler) => HttpHandler | Promise<HttpHandler>;
```

HttpFilter is a powerful concept that helps you to add features to already defined `HttpHandler`s. Here are some examples:

* You want to measure the time of your handlers. You can build a filter called `measure` and decorate your `HttpHandlers` with them to measure the time of request processing.
* You want to authenticate some of your routes. You can build a filter to check the request headers and if the request is provided with the token in the header, send it to the handler, otherwise reject the request and respond with `UNAUTHORIZED`.
* You want to define a global error handler that handles every unhandled exception, log the error and respond with a proper response like `INTERNAL_SERVER_ERROR`. You can build a filter that calls the provided handler in a `try` block and respond with error in `catch` block. Then decorate your server with this error handler filter (because server is a `HttpHandler`!).

---

Using handlers and filters, you can simply implement reusable building blocks for different use cases. The following illustration visualizes the concept of filters and handlers:

![Https Data Flows](https://raw.githubusercontent.com/http4ts/http4ts/master/doc/asset/diagram.png)
