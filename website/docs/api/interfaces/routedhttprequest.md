---
id: "routedhttprequest"
title: "RoutedHttpRequest"
sidebar_label: "RoutedHttpRequest"
---

[http4ts - v0.0.3](../index.md) › [RoutedHttpRequest](routedhttprequest.md)

## Hierarchy

  ↳ [HttpRequest](httprequest.md)

  ↳ **RoutedHttpRequest**

## Index

### Properties

* [addHeader](routedhttprequest.md#addheader)
* [addQuery](routedhttprequest.md#addquery)
* [body](routedhttprequest.md#body)
* [headers](routedhttprequest.md#headers)
* [method](routedhttprequest.md#method)
* [path](routedhttprequest.md#path)
* [query](routedhttprequest.md#query)
* [removeHeader](routedhttprequest.md#removeheader)
* [removeQuery](routedhttprequest.md#removequery)
* [replaceHeader](routedhttprequest.md#replaceheader)
* [replaceQuery](routedhttprequest.md#replacequery)
* [routeParams](routedhttprequest.md#routeparams)
* [setBody](routedhttprequest.md#setbody)
* [setHeaders](routedhttprequest.md#setheaders)
* [setMethod](routedhttprequest.md#setmethod)
* [setUrl](routedhttprequest.md#seturl)
* [url](routedhttprequest.md#url)

## Properties

###  addHeader

• **addHeader**: *function*

*Inherited from [HttpRequest](httprequest.md).[addHeader](httprequest.md#addheader)*

Defined in src/core/http.ts:44

#### Type declaration:

▸ (`header`: keyof RequestHttpHeaders, `value`: string | string[]): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof RequestHttpHeaders |
`value` | string &#124; string[] |

___

###  addQuery

• **addQuery**: *function*

*Inherited from [HttpRequest](httprequest.md).[addQuery](httprequest.md#addquery)*

Defined in src/core/http.ts:57

#### Type declaration:

▸ (`name`: string, `value`: string | string[]): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string &#124; string[] |

___

###  body

• **body**: *[HttpBody](httpbody.md)*

*Inherited from [HttpMessage](httpmessage.md).[body](httpmessage.md#body)*

Defined in src/core/http.ts:35

___

###  headers

• **headers**: *[RequestHttpHeaders](requesthttpheaders.md)*

*Inherited from [HttpRequest](httprequest.md).[headers](httprequest.md#headers)*

*Overrides [HttpMessage](httpmessage.md).[headers](httpmessage.md#headers)*

Defined in src/core/http.ts:39

___

###  method

• **method**: *[HttpMethod](../index.md#httpmethod)*

*Inherited from [HttpRequest](httprequest.md).[method](httprequest.md#method)*

Defined in src/core/http.ts:40

___

###  path

• **path**: *function*

*Inherited from [HttpRequest](httprequest.md).[path](httprequest.md#path)*

Defined in src/core/http.ts:59

#### Type declaration:

▸ (): *string*

___

###  query

• **query**: *function*

*Inherited from [HttpRequest](httprequest.md).[query](httprequest.md#query)*

Defined in src/core/http.ts:55

#### Type declaration:

▸ (`name`: string): *[HttpQuery](../index.md#httpquery)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

___

###  removeHeader

• **removeHeader**: *function*

*Inherited from [HttpRequest](httprequest.md).[removeHeader](httprequest.md#removeheader)*

Defined in src/core/http.ts:52

#### Type declaration:

▸ (`header`: keyof RequestHttpHeaders): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof RequestHttpHeaders |

___

###  removeQuery

• **removeQuery**: *function*

*Inherited from [HttpRequest](httprequest.md).[removeQuery](httprequest.md#removequery)*

Defined in src/core/http.ts:56

#### Type declaration:

▸ (`name`: string): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

___

###  replaceHeader

• **replaceHeader**: *function*

*Inherited from [HttpRequest](httprequest.md).[replaceHeader](httprequest.md#replaceheader)*

Defined in src/core/http.ts:48

#### Type declaration:

▸ (`header`: keyof RequestHttpHeaders, `value`: string | string[]): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof RequestHttpHeaders |
`value` | string &#124; string[] |

___

###  replaceQuery

• **replaceQuery**: *function*

*Inherited from [HttpRequest](httprequest.md).[replaceQuery](httprequest.md#replacequery)*

Defined in src/core/http.ts:58

#### Type declaration:

▸ (`name`: string, `value`: string | string[]): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string &#124; string[] |

___

###  routeParams

• **routeParams**: *Record‹string, string›*

Defined in src/core/routing/routes.ts:8

___

###  setBody

• **setBody**: *function*

*Inherited from [HttpRequest](httprequest.md).[setBody](httprequest.md#setbody)*

Defined in src/core/http.ts:61

#### Type declaration:

▸ (`body`: [HttpBody](httpbody.md) | string): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | [HttpBody](httpbody.md) &#124; string |

___

###  setHeaders

• **setHeaders**: *function*

*Inherited from [HttpRequest](httprequest.md).[setHeaders](httprequest.md#setheaders)*

Defined in src/core/http.ts:43

#### Type declaration:

▸ (`headers`: [RequestHttpHeaders](requesthttpheaders.md)): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [RequestHttpHeaders](requesthttpheaders.md) |

___

###  setMethod

• **setMethod**: *function*

*Inherited from [HttpRequest](httprequest.md).[setMethod](httprequest.md#setmethod)*

Defined in src/core/http.ts:63

#### Type declaration:

▸ (`method`: [HttpMethod](../index.md#httpmethod)): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [HttpMethod](../index.md#httpmethod) |

___

###  setUrl

• **setUrl**: *function*

*Inherited from [HttpRequest](httprequest.md).[setUrl](httprequest.md#seturl)*

Defined in src/core/http.ts:54

#### Type declaration:

▸ (`url`: string): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

___

###  url

• **url**: *string*

*Inherited from [HttpRequest](httprequest.md).[url](httprequest.md#url)*

Defined in src/core/http.ts:41
