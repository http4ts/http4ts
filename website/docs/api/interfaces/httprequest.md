---
id: "httprequest"
title: "HttpRequest"
sidebar_label: "HttpRequest"
---

[http4ts - v0.0.3](../index.md) › [HttpRequest](httprequest.md)

## Hierarchy

* [HttpMessage](httpmessage.md)

  ↳ **HttpRequest**

  ↳ [RoutedHttpRequest](routedhttprequest.md)

## Implemented by

* [HttpRequestImpl](../classes/httprequestimpl.md)

## Index

### Properties

* [addHeader](httprequest.md#addheader)
* [addQuery](httprequest.md#addquery)
* [body](httprequest.md#body)
* [headers](httprequest.md#headers)
* [method](httprequest.md#method)
* [path](httprequest.md#path)
* [query](httprequest.md#query)
* [removeHeader](httprequest.md#removeheader)
* [removeQuery](httprequest.md#removequery)
* [replaceHeader](httprequest.md#replaceheader)
* [replaceQuery](httprequest.md#replacequery)
* [setBody](httprequest.md#setbody)
* [setHeaders](httprequest.md#setheaders)
* [setMethod](httprequest.md#setmethod)
* [setUrl](httprequest.md#seturl)
* [url](httprequest.md#url)

## Properties

###  addHeader

• **addHeader**: *function*

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

*Overrides [HttpMessage](httpmessage.md).[headers](httpmessage.md#headers)*

Defined in src/core/http.ts:39

___

###  method

• **method**: *[HttpMethod](../index.md#httpmethod)*

Defined in src/core/http.ts:40

___

###  path

• **path**: *function*

Defined in src/core/http.ts:59

#### Type declaration:

▸ (): *string*

___

###  query

• **query**: *function*

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

Defined in src/core/http.ts:58

#### Type declaration:

▸ (`name`: string, `value`: string | string[]): *[HttpRequest](httprequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string &#124; string[] |

___

###  setBody

• **setBody**: *function*

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

Defined in src/core/http.ts:41
