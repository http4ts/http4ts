---
id: binding-to-node-js-server
title: Binding To Node.Js Server
sidebar_label: Binding To Node.Js Server
---

Handlers contain the logic of your application, but you need to bind a handler to a server to be executed when a client sends a request. Http4ts is server independent. Meaning that it is possible to connect a handler to almost every library or platform which can listen to http requests. Http4ts supports binding to Node.Js out-of-the-box.

To bind your handler to Node.Js, create an http or https server and use `toNodeRequestListener` to bind it to an http4ts handler:

``` ts {12-19}
import { HttpRequest, HttpStatus, toNodeRequestListener, res } from "http4ts";

import * as http from "http";

async function handler(req: HttpRequest) {
  return res({
    body: "Hello world!",
    status: HttpStatus.OK
  });
}

const server = http.createServer(toNodeRequestListener(handler));
//                                    ^---This is where the binding takes place
const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

If you want to create an https server, just import `https` module. If you want to configure your server differently, you just need to learn how to configure a Node.Js server. No library specific configuration needed!
