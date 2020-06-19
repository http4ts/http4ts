---
id: "stringbody"
title: "StringBody"
sidebar_label: "StringBody"
---

[http4ts - v0.0.3](../index.md) › [StringBody](stringbody.md)

## Hierarchy

* **StringBody**

## Implements

* [HttpBody](../interfaces/httpbody.md)

## Index

### Constructors

* [constructor](stringbody.md#constructor)

### Methods

* [[Symbol.asyncIterator]](stringbody.md#[symbol.asynciterator])
* [asString](stringbody.md#asstring)

## Constructors

###  constructor

\+ **new StringBody**(`content`: string): *[StringBody](stringbody.md)*

Defined in src/core/http-body/string-body.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *[StringBody](stringbody.md)*

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncGenerator‹Uint8Array‹›, void, unknown›*

*Implementation of [HttpBody](../interfaces/httpbody.md)*

Defined in src/core/http-body/string-body.ts:11

**Returns:** *AsyncGenerator‹Uint8Array‹›, void, unknown›*

___

###  asString

▸ **asString**(): *Promise‹string›*

Defined in src/core/http-body/string-body.ts:7

**Returns:** *Promise‹string›*
