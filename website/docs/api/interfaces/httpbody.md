---
id: "httpbody"
title: "HttpBody"
sidebar_label: "HttpBody"
---

[http4ts - v0.0.3](../index.md) › [HttpBody](httpbody.md)

## Hierarchy

* AsyncIterable‹Uint8Array | string›

  ↳ **HttpBody**

## Implemented by

* [BufferedBody](../classes/bufferedbody.md)
* [StringBody](../classes/stringbody.md)

## Index

### Properties

* [asString](httpbody.md#asstring)

### Methods

* [[Symbol.asyncIterator]](httpbody.md#[symbol.asynciterator])

## Properties

###  asString

• **asString**: *function*

Defined in src/core/http.ts:30

Reads the body stream to end and decodes it as string.

**`param`** 

#### Type declaration:

▸ (`encoding?`: undefined | string): *Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`encoding?` | undefined &#124; string |

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterator‹Uint8Array | string›*

*Inherited from [HttpBody](httpbody.md).[[Symbol.asyncIterator]](httpbody.md#[symbol.asynciterator])*

Defined in node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:40

**Returns:** *AsyncIterator‹Uint8Array | string›*
