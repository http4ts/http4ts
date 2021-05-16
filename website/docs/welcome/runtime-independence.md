---
id: runtime-independence
title: Runtime Independence
sidebar_label: Runtime Independence
---

*Http4ts* core functionality does not have any dependencies to node.js packages. All the code in the core of *http4ts* is written as standard javascript utilities and concepts. Here are some of the examples:

* Core module doesn't use the node.js `IncomingMessage` or `ServerResponse` types as request and responses. Instead, it defines runtime-independent request and response types.
* The Node.js streams are not used in *http4ts*. Instead of streams, we use async iterators which are pure javascript constructs.
* The project does not have any dependencies to any npm module or other package managers. However, we have a couple of `devDependencies` to facilitate the development of the library.

This design facilitates testing and enables us to build and distribute *http4ts* to other environments. Some of the interesting targets can be [Deno](https://deno.land/), serverless environments, or an existing Node.Js server application like [Express](https://expressjs.com/). We are also building a browser-based binding and a simple React component which can help us start the server in the browser and build fully client-side sample applications.
