---
slug: pipeline-op
title: Javascript Pipeline Operator and http4ts Filters
author: Ali Sabzevari
author_title: http4ts Core Team
author_url: https://github.com/alisabzevari
author_image_url: https://avatars0.githubusercontent.com/u/826242?v=4
tags: [filters]
---

One of the unique features of http4s is its composability. You can componse multiple filters together and build reusable pieces of funtionality.

However, composing functions in Javascript is not the best experience you can expect. As an example, consider the following filters (Implementations are removed for brevity):

```ts
const authorize: (handler: HttpHandler) => HttpHandler; // = ...

const handleErrors: (handler: HttpHandler) => HttpHandler; // = ...

const metrics: (metricsRegistry) => (handler: HttpHandler) => HttpHandler; // = ...

const trace: (tracer) => (handler: HttpHandler) => HttpHandler; // = ...
```

Composing these filters together results in something like this:

```ts
const finalHandler = req =>
  handleErrors(trace(tracer)(metrics(metricsRegistry)(authorize(req))));
```

Everyone agrees that this piece of code looks weird and very hard to understand. Functional programming libraries like [Ramda](https://ramdajs.com/) provide helpers that improves the readability of this pattern. For example, you can use [`pipe`](https://ramdajs.com/docs/#pipe):

```ts
const finalHandler = R.pipe(
  authorize,
  metrics(metricsRegistry),
  trace(tracer),
  handleErrors
);
```

It looks much better but still it would be great if Javascript could support this pattern in the language out of the box.

## Enter pipeline operator

There is an [Ecmascript proposal](https://github.com/tc39/proposal-pipeline-operator) to add an operator that solves this problem. It is called pipeline operator and here is how our code will look like when Javascript supports this operator:

```ts
const finalHandler = authorize |> metrics(metricsRegistry) |> trace(tracer) |> handleErrors 
```

I like this operator a lot since it visually describes the flow of the data through the functions which matches with the purpose and mechanics of http4ts filters.

If you also like pipeline operator, go ahead and start the proposal repository and contribute to the importance of this language feature.

Happy Javascripting!
