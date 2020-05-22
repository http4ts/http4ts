---
id: "tokenstoregexpoptions"
title: "TokensToRegexpOptions"
sidebar_label: "TokensToRegexpOptions"
---

[http4ts - v0.0.3](../index.md) › [TokensToRegexpOptions](tokenstoregexpoptions.md)

## Hierarchy

* **TokensToRegexpOptions**

## Index

### Properties

* [delimiter](tokenstoregexpoptions.md#optional-delimiter)
* [encode](tokenstoregexpoptions.md#optional-encode)
* [end](tokenstoregexpoptions.md#optional-end)
* [endsWith](tokenstoregexpoptions.md#optional-endswith)
* [sensitive](tokenstoregexpoptions.md#optional-sensitive)
* [start](tokenstoregexpoptions.md#optional-start)
* [strict](tokenstoregexpoptions.md#optional-strict)

## Properties

### `Optional` delimiter

• **delimiter**? : *undefined | string*

Defined in src/core/routing/path-to-regexp.ts:519

Sets the final character for non-ending optimistic matches. (default: `/`)

___

### `Optional` encode

• **encode**? : *undefined | function*

Defined in src/core/routing/path-to-regexp.ts:527

Encode path tokens for use in the `RegExp`.

___

### `Optional` end

• **end**? : *undefined | false | true*

Defined in src/core/routing/path-to-regexp.ts:511

When `true` the regexp will match to the end of the string. (default: `true`)

___

### `Optional` endsWith

• **endsWith**? : *undefined | string*

Defined in src/core/routing/path-to-regexp.ts:523

List of characters that can also be "end" characters.

___

### `Optional` sensitive

• **sensitive**? : *undefined | false | true*

Defined in src/core/routing/path-to-regexp.ts:503

When `true` the regexp will be case sensitive. (default: `false`)

___

### `Optional` start

• **start**? : *undefined | false | true*

Defined in src/core/routing/path-to-regexp.ts:515

When `true` the regexp will match from the beginning of the string. (default: `true`)

___

### `Optional` strict

• **strict**? : *undefined | false | true*

Defined in src/core/routing/path-to-regexp.ts:507

When `true` the regexp allows an optional trailing delimiter to match. (default: `false`)
