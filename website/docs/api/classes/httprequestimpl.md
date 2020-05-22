---
id: "httprequestimpl"
title: "HttpRequestImpl"
sidebar_label: "HttpRequestImpl"
---

[http4ts - v0.0.3](../index.md) › [HttpRequestImpl](httprequestimpl.md)

## Hierarchy

* **HttpRequestImpl**

## Implements

* [HttpRequest](../interfaces/httprequest.md)

## Index

### Constructors

* [constructor](httprequestimpl.md#constructor)

### Properties

* [body](httprequestimpl.md#readonly-body)
* [headers](httprequestimpl.md#readonly-headers)
* [method](httprequestimpl.md#readonly-method)
* [url](httprequestimpl.md#readonly-url)

### Methods

* [addHeader](httprequestimpl.md#addheader)
* [addQuery](httprequestimpl.md#addquery)
* [path](httprequestimpl.md#path)
* [query](httprequestimpl.md#query)
* [removeHeader](httprequestimpl.md#removeheader)
* [removeQuery](httprequestimpl.md#removequery)
* [replaceHeader](httprequestimpl.md#replaceheader)
* [replaceQuery](httprequestimpl.md#replacequery)
* [setBody](httprequestimpl.md#setbody)
* [setHeaders](httprequestimpl.md#setheaders)
* [setMethod](httprequestimpl.md#setmethod)
* [setUrl](httprequestimpl.md#seturl)

## Constructors

###  constructor

\+ **new HttpRequestImpl**(`url`: string, `method`: [HttpMethod](../index.md#httpmethod), `body`: [HttpBody](../interfaces/httpbody.md), `headers`: [RequestHttpHeaders](../interfaces/requesthttpheaders.md)): *[HttpRequestImpl](httprequestimpl.md)*

Defined in src/core/http-request/http-request-impl.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`method` | [HttpMethod](../index.md#httpmethod) |
`body` | [HttpBody](../interfaces/httpbody.md) |
`headers` | [RequestHttpHeaders](../interfaces/requesthttpheaders.md) |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)*

## Properties

### `Readonly` body

• **body**: *[HttpBody](../interfaces/httpbody.md)*

*Implementation of [HttpRequest](../interfaces/httprequest.md).[body](../interfaces/httprequest.md#body)*

Defined in src/core/http-request/http-request-impl.ts:15

___

### `Readonly` headers

• **headers**: *[RequestHttpHeaders](../interfaces/requesthttpheaders.md)*

*Implementation of [HttpRequest](../interfaces/httprequest.md).[headers](../interfaces/httprequest.md#headers)*

Defined in src/core/http-request/http-request-impl.ts:16

___

### `Readonly` method

• **method**: *[HttpMethod](../index.md#httpmethod)*

*Implementation of [HttpRequest](../interfaces/httprequest.md).[method](../interfaces/httprequest.md#method)*

Defined in src/core/http-request/http-request-impl.ts:14

___

### `Readonly` url

• **url**: *string*

*Implementation of [HttpRequest](../interfaces/httprequest.md).[url](../interfaces/httprequest.md#url)*

Defined in src/core/http-request/http-request-impl.ts:13

## Methods

###  addHeader

▸ **addHeader**(`header`: keyof RequestHttpHeaders, `value`: string | string[]): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof RequestHttpHeaders |
`value` | string &#124; string[] |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  addQuery

▸ **addQuery**(`name`: string, `value`: string | string[]): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:83

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string &#124; string[] |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  path

▸ **path**(): *string*

Defined in src/core/http-request/http-request-impl.ts:128

**Returns:** *string*

___

###  query

▸ **query**(`name`: string): *undefined | string | string[]*

Defined in src/core/http-request/http-request-impl.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *undefined | string | string[]*

___

###  removeHeader

▸ **removeHeader**(`headerToRemove`: keyof RequestHttpHeaders): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`headerToRemove` | keyof RequestHttpHeaders |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  removeQuery

▸ **removeQuery**(`queryToRemove`: string): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:99

**Parameters:**

Name | Type |
------ | ------ |
`queryToRemove` | string |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  replaceHeader

▸ **replaceHeader**(`header`: keyof RequestHttpHeaders, `value`: string | string[]): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof RequestHttpHeaders |
`value` | string &#124; string[] |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  replaceQuery

▸ **replaceQuery**(`name`: string, `value`: string | string[]): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:111

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string &#124; string[] |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  setBody

▸ **setBody**(`body`: [HttpBody](../interfaces/httpbody.md) | string): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:132

**Parameters:**

Name | Type |
------ | ------ |
`body` | [HttpBody](../interfaces/httpbody.md) &#124; string |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  setHeaders

▸ **setHeaders**(`headers`: [RequestHttpHeaders](../interfaces/requesthttpheaders.md)): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [RequestHttpHeaders](../interfaces/requesthttpheaders.md) |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  setMethod

▸ **setMethod**(`method`: [HttpMethod](../index.md#httpmethod)): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:138

**Parameters:**

Name | Type |
------ | ------ |
`method` | [HttpMethod](../index.md#httpmethod) |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*

___

###  setUrl

▸ **setUrl**(`url`: string): *[HttpRequestImpl](httprequestimpl.md)‹›*

Defined in src/core/http-request/http-request-impl.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[HttpRequestImpl](httprequestimpl.md)‹›*
