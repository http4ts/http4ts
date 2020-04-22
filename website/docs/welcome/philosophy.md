---
id: philosophy
title: Philosophy
sidebar_label: Philosophy
---

*Http4ts* aims to obey the following rules as its base architectural mindset:
* **Server as a Function**: This library is based on the Twitter paper [Your Server as a Function](https://monkey.org/~marius/funsrv.pdf) and inspired by the fantastic [http4k](https://github.com/http4k/http4k/) library. An HTTP server application is a composition of two main types (Look at [Core Concepts](core-concepts) for more info):
    * `HttpHandler`: defines the functions that handle requests.
    * `HttpFilter`: a higher-order function that accepts an `HttpHandler` and returns an `HttpHandler`. It should be used to add request/response pre-/post-processing.
* **Runtime Independence**: While the library has bindings to be used with a Node.js runtime, the core library does not have any dependency on the Node.js environment. It should be possible to use it for both Node.js and Deno.
* **Symmetric**: Similar to http4k, this library supports symmetric interfaces for the HTTP client and HTTP server. It is possible to reuse the same `HttpHandler` interface and all the filters on both server- and client-side. There is an `HttpClient` functionality available in the library which follows the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) interface and is independent of any runtime.
* **Type Safety**: *Http4ts* is built using the maximum type safety power of [TypeScript](https://www.typescriptlang.org/) and, in order to use its maximum power, you should do the same.
* **Immutability**: Similar to http4k, all entities in the library are immutable unless, naturally, it is not possible.
* **Testability**: Since the basic building blocks of this library are functions and the main entities are abstracted from the environment, it is extremely simple to write tests for the code built by *http4ts*.
* **Minimal** The request and response contain only the necessary information to represent the HTTP message. Extra information such as session and cookies are not included because they don't belong to the HTTP protocol.
* **Composable** All the building blocks are composable which is a great addition to code reusability, organization and extension.
