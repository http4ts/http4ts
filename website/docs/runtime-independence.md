---
id: runtime-independence
title: Runtime Independence
sidebar_label: Runtime Independence
---

http4ts' core functionality does not have any dependencies to node.js packages. All the code in the core of http4ts has written by standard javascript utilities. Here are some of the examples:

* Core module doesn't use node.js' `IncomingMessage` or `ServerResponse` types as request and responses. Instead, it defines runtime independent request and response types.
* Node.js' streams are not used in http4ts. Instead of streams we use async iterators which are pure javascript constructs.
* The whole project does not have any dependencies to any anpm module or other package managers. Although We have a couple of devDependencies to facilitate the development of the library.

This design facilitates testing and enable us to build and distribute http4ts to other environments. One of the interesting targets for us is [Deno](https://deno.land/). We are also working on building a browser based binding and a simple React component which can help us start the server in the browser and build sample fully client applications.

However, there are some exceptional cases that we need to use some runtime dependent implementations. For example, we need `TextEncoder` and `TextDecoder` classes and while in standard javascript they should be available via `window` object, node.js provides them differently (We know that node.js v11 added those classes to the global object but we don't want to make node.js binding dependent to a specific version). For these cases, the core library is only dependent to a similar interface and the binding function should provide the real classes to the core library via a function called `setupEnvironment`.

Note that, the current node.js binding (`toNodeRequestListener` function) calls `setupEnvironment` automatically. So, there is no need to call this function explicitly. This information will only be relevant if you want to write a binding.
