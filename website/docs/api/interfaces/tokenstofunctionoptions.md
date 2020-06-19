---
id: "tokenstofunctionoptions"
title: "TokensToFunctionOptions"
sidebar_label: "TokensToFunctionOptions"
---

[http4ts - v0.0.3](../index.md) › [TokensToFunctionOptions](tokenstofunctionoptions.md)

## Hierarchy

* **TokensToFunctionOptions**

## Index

### Properties

* [encode](tokenstofunctionoptions.md#optional-encode)
* [sensitive](tokenstofunctionoptions.md#optional-sensitive)
* [validate](tokenstofunctionoptions.md#optional-validate)

## Properties

### `Optional` encode

• **encode**? : *undefined | function*

Defined in src/core/routing/path-to-regexp.ts:244

Function for encoding input strings for output.

___

### `Optional` sensitive

• **sensitive**? : *undefined | false | true*

Defined in src/core/routing/path-to-regexp.ts:240

When `true` the regexp will be case sensitive. (default: `false`)

___

### `Optional` validate

• **validate**? : *undefined | false | true*

Defined in src/core/routing/path-to-regexp.ts:248

When `false` the function can produce an invalid (unmatched) path. (default: `true`)
