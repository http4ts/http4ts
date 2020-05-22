---
id: "httpresponseimpl"
title: "HttpResponseImpl"
sidebar_label: "HttpResponseImpl"
---

[http4ts - v0.0.3](../index.md) › [HttpResponseImpl](httpresponseimpl.md)

## Hierarchy

* **HttpResponseImpl**

## Implements

* [HttpResponse](../interfaces/httpresponse.md)

## Index

### Constructors

* [constructor](httpresponseimpl.md#constructor)

### Properties

* [body](httpresponseimpl.md#readonly-body)
* [headers](httpresponseimpl.md#readonly-headers)
* [status](httpresponseimpl.md#readonly-status)

### Methods

* [addHeader](httpresponseimpl.md#addheader)
* [removeHeader](httpresponseimpl.md#removeheader)
* [replaceHeader](httpresponseimpl.md#replaceheader)
* [setBody](httpresponseimpl.md#setbody)
* [setHeaders](httpresponseimpl.md#setheaders)
* [setStatus](httpresponseimpl.md#setstatus)

## Constructors

###  constructor

\+ **new HttpResponseImpl**(`status`: [HttpStatus](../enums/httpstatus.md), `body`: [HttpBody](../interfaces/httpbody.md), `headers`: [ResponseHttpHeaders](../interfaces/responsehttpheaders.md)): *[HttpResponseImpl](httpresponseimpl.md)*

Defined in src/core/http-response/http-response-impl.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`status` | [HttpStatus](../enums/httpstatus.md) |
`body` | [HttpBody](../interfaces/httpbody.md) |
`headers` | [ResponseHttpHeaders](../interfaces/responsehttpheaders.md) |

**Returns:** *[HttpResponseImpl](httpresponseimpl.md)*

## Properties

### `Readonly` body

• **body**: *[HttpBody](../interfaces/httpbody.md)*

*Implementation of [HttpResponse](../interfaces/httpresponse.md).[body](../interfaces/httpresponse.md#body)*

Defined in src/core/http-response/http-response-impl.ts:8

___

### `Readonly` headers

• **headers**: *[ResponseHttpHeaders](../interfaces/responsehttpheaders.md)*

*Implementation of [HttpResponse](../interfaces/httpresponse.md).[headers](../interfaces/httpresponse.md#headers)*

Defined in src/core/http-response/http-response-impl.ts:9

___

### `Readonly` status

• **status**: *[HttpStatus](../enums/httpstatus.md)*

*Implementation of [HttpResponse](../interfaces/httpresponse.md).[status](../interfaces/httpresponse.md#status)*

Defined in src/core/http-response/http-response-impl.ts:7

## Methods

###  addHeader

▸ **addHeader**(`header`: keyof ResponseHttpHeaders, `value`: string | string[]): *[HttpResponseImpl](httpresponseimpl.md)‹›*

Defined in src/core/http-response/http-response-impl.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof ResponseHttpHeaders |
`value` | string &#124; string[] |

**Returns:** *[HttpResponseImpl](httpresponseimpl.md)‹›*

___

###  removeHeader

▸ **removeHeader**(`headerToRemove`: keyof ResponseHttpHeaders): *[HttpResponseImpl](httpresponseimpl.md)‹›*

Defined in src/core/http-response/http-response-impl.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`headerToRemove` | keyof ResponseHttpHeaders |

**Returns:** *[HttpResponseImpl](httpresponseimpl.md)‹›*

___

###  replaceHeader

▸ **replaceHeader**(`header`: keyof ResponseHttpHeaders, `value`: string | string[]): *[HttpResponseImpl](httpresponseimpl.md)‹›*

Defined in src/core/http-response/http-response-impl.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof ResponseHttpHeaders |
`value` | string &#124; string[] |

**Returns:** *[HttpResponseImpl](httpresponseimpl.md)‹›*

___

###  setBody

▸ **setBody**(`body`: [HttpBody](../interfaces/httpbody.md) | string): *[HttpResponseImpl](httpresponseimpl.md)‹›*

Defined in src/core/http-response/http-response-impl.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`body` | [HttpBody](../interfaces/httpbody.md) &#124; string |

**Returns:** *[HttpResponseImpl](httpresponseimpl.md)‹›*

___

###  setHeaders

▸ **setHeaders**(`headers`: [ResponseHttpHeaders](../interfaces/responsehttpheaders.md)): *[HttpResponseImpl](httpresponseimpl.md)‹›*

Defined in src/core/http-response/http-response-impl.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [ResponseHttpHeaders](../interfaces/responsehttpheaders.md) |

**Returns:** *[HttpResponseImpl](httpresponseimpl.md)‹›*

___

###  setStatus

▸ **setStatus**(`status`: [HttpStatus](../enums/httpstatus.md)): *[HttpResponseImpl](httpresponseimpl.md)‹›*

Defined in src/core/http-response/http-response-impl.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`status` | [HttpStatus](../enums/httpstatus.md) |

**Returns:** *[HttpResponseImpl](httpresponseimpl.md)‹›*
