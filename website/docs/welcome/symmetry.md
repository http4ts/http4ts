---
id: symmetry
title: Symmetry
sidebar_label: Symmetry
---
> ⚠️ This section is a work in progress.

Contents:
* Connecting different applications together

Http handlers in http4ts are symmetric. Meaning that http client follows the same type definition as http server does. In other words, an http client is just a function that accepts an `HttpRequest` and returns an `HttpResponse`:

```ts
type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
```

Providing symmetric interfaces for client and server improves the learning curve which helps onboarding new developers to the codebase.

One of the benefits of this model is that you can easily mock the http clients in your application by replacing the implementation of them with a mocked http handler.

> Example needed here

You can also use another http4ts server application as the client of an http4ts application without putting them on the network. This is possible because the http client and server are interchangeable.

> Example needed here

Another benefit is that you can reuse your filters on both server handlers and http clients.

> Example needed here
