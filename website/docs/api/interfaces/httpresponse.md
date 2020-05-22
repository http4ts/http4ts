---
id: "httpresponse"
title: "HttpResponse"
sidebar_label: "HttpResponse"
---

[http4ts - v0.0.3](../index.md) › [HttpResponse](httpresponse.md)

## Hierarchy

* [HttpMessage](httpmessage.md)

  ↳ **HttpResponse**

## Implemented by

* [HttpResponseImpl](../classes/httpresponseimpl.md)

## Index

### Properties

* [addHeader](httpresponse.md#addheader)
* [body](httpresponse.md#body)
* [headers](httpresponse.md#headers)
* [removeHeader](httpresponse.md#removeheader)
* [replaceHeader](httpresponse.md#replaceheader)
* [setBody](httpresponse.md#setbody)
* [setHeaders](httpresponse.md#setheaders)
* [setStatus](httpresponse.md#setstatus)
* [status](httpresponse.md#status)

## Properties

###  addHeader

• **addHeader**: *function*

Defined in src/core/http.ts:71

#### Type declaration:

▸ (`header`: keyof ResponseHttpHeaders, `value`: string | string[]): *[HttpResponse](httpresponse.md)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof ResponseHttpHeaders |
`value` | string &#124; string[] |

___

###  body

• **body**: *[HttpBody](httpbody.md)*

*Inherited from [HttpMessage](httpmessage.md).[body](httpmessage.md#body)*

Defined in src/core/http.ts:35

___

###  headers

• **headers**: *[ResponseHttpHeaders](responsehttpheaders.md)*

*Overrides [HttpMessage](httpmessage.md).[headers](httpmessage.md#headers)*

Defined in src/core/http.ts:67

___

###  removeHeader

• **removeHeader**: *function*

Defined in src/core/http.ts:79

#### Type declaration:

▸ (`header`: keyof ResponseHttpHeaders): *[HttpResponse](httpresponse.md)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof ResponseHttpHeaders |

___

###  replaceHeader

• **replaceHeader**: *function*

Defined in src/core/http.ts:75

#### Type declaration:

▸ (`header`: keyof ResponseHttpHeaders, `value`: string | string[]): *[HttpResponse](httpresponse.md)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | keyof ResponseHttpHeaders |
`value` | string &#124; string[] |

___

###  setBody

• **setBody**: *function*

Defined in src/core/http.ts:81

#### Type declaration:

▸ (`body`: [HttpBody](httpbody.md)): *[HttpResponse](httpresponse.md)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | [HttpBody](httpbody.md) |

___

###  setHeaders

• **setHeaders**: *function*

Defined in src/core/http.ts:70

#### Type declaration:

▸ (`headers`: [ResponseHttpHeaders](responsehttpheaders.md)): *[HttpResponse](httpresponse.md)*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [ResponseHttpHeaders](responsehttpheaders.md) |

___

###  setStatus

• **setStatus**: *function*

Defined in src/core/http.ts:83

#### Type declaration:

▸ (`status`: [HttpStatus](../enums/httpstatus.md)): *[HttpResponse](httpresponse.md)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | [HttpStatus](../enums/httpstatus.md) |

___

###  status

• **status**: *[HttpStatus](../enums/httpstatus.md)*

Defined in src/core/http.ts:68
