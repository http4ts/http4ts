---
id: "bufferedbody"
title: "BufferedBody"
sidebar_label: "BufferedBody"
---

[http4ts - v0.0.3](../index.md) › [BufferedBody](bufferedbody.md)

## Hierarchy

* **BufferedBody**

## Implements

* [HttpBody](../interfaces/httpbody.md)

## Index

### Constructors

* [constructor](bufferedbody.md#constructor)

### Methods

* [[Symbol.asyncIterator]](bufferedbody.md#[symbol.asynciterator])
* [asString](bufferedbody.md#asstring)

## Constructors

###  constructor

\+ **new BufferedBody**(`it`: AsyncIterable‹Uint8Array | string›): *[BufferedBody](bufferedbody.md)*

Defined in src/core/http-body/buffered-body.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`it` | AsyncIterable‹Uint8Array &#124; string› |

**Returns:** *[BufferedBody](bufferedbody.md)*

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncGenerator‹string | Uint8Array‹›, void, undefined›*

*Implementation of [HttpBody](../interfaces/httpbody.md)*

Defined in src/core/http-body/buffered-body.ts:7

**Returns:** *AsyncGenerator‹string | Uint8Array‹›, void, undefined›*

___

###  asString

▸ **asString**(`encoding`: string): *Promise‹string›*

Defined in src/core/http-body/buffered-body.ts:11

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`encoding` | string | "utf8" |

**Returns:** *Promise‹string›*
