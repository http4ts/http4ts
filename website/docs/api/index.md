---
id: "index"
title: "http4ts - v0.0.3"
sidebar_label: "Globals"
---

[http4ts - v0.0.3](index.md)

## Index

### Enumerations

* [HttpMethods](enums/httpmethods.md)
* [HttpStatus](enums/httpstatus.md)

### Classes

* [BufferedBody](classes/bufferedbody.md)
* [HttpRequestImpl](classes/httprequestimpl.md)
* [HttpResponseImpl](classes/httpresponseimpl.md)
* [StringBody](classes/stringbody.md)

### Interfaces

* [HttpBody](interfaces/httpbody.md)
* [HttpHeaders](interfaces/httpheaders.md)
* [HttpMessage](interfaces/httpmessage.md)
* [HttpRequest](interfaces/httprequest.md)
* [HttpResponse](interfaces/httpresponse.md)
* [Key](interfaces/key.md)
* [LexToken](interfaces/lextoken.md)
* [MatchResult](interfaces/matchresult.md)
* [ParseOptions](interfaces/parseoptions.md)
* [RegexpToFunctionOptions](interfaces/regexptofunctionoptions.md)
* [RequestHttpHeaders](interfaces/requesthttpheaders.md)
* [ResponseHttpHeaders](interfaces/responsehttpheaders.md)
* [RouteDefinition](interfaces/routedefinition.md)
* [RoutedHttpRequest](interfaces/routedhttprequest.md)
* [TokensToFunctionOptions](interfaces/tokenstofunctionoptions.md)
* [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md)
* [URI](interfaces/uri.md)

### Type aliases

* [HttpFilter](index.md#httpfilter)
* [HttpHandler](index.md#httphandler)
* [HttpMethod](index.md#httpmethod)
* [HttpQuery](index.md#httpquery)
* [Match](index.md#match)
* [MatchFunction](index.md#matchfunction)
* [Path](index.md#path)
* [PathFunction](index.md#pathfunction)
* [RequestParams](index.md#requestparams)
* [ResponeParams](index.md#responeparams)
* [RoutedHttpHandler](index.md#routedhttphandler)
* [Token](index.md#token)
* [UriTemplate](index.md#uritemplate)

### Variables

* [TheTextDecoder](index.md#let-thetextdecoder)
* [TheTextEncoder](index.md#let-thetextencoder)

### Functions

* [all](index.md#all)
* [arrayToRegexp](index.md#arraytoregexp)
* [asJson](index.md#asjson)
* [compile](index.md#compile)
* [defaultNotFoundHandler](index.md#defaultnotfoundhandler)
* [escapeString](index.md#escapestring)
* [flags](index.md#flags)
* [get](index.md#get)
* [iterableToString](index.md#iterabletostring)
* [jsonBody](index.md#jsonbody)
* [lexer](index.md#lexer)
* [match](index.md#match)
* [notFound](index.md#notfound)
* [parse](index.md#parse)
* [pathToRegexp](index.md#pathtoregexp)
* [post](index.md#post)
* [regexpToFunction](index.md#regexptofunction)
* [regexpToRegexp](index.md#regexptoregexp)
* [req](index.md#req)
* [res](index.md#res)
* [route](index.md#route)
* [routes](index.md#routes)
* [setupEnvironment](index.md#setupenvironment)
* [stringBody](index.md#stringbody)
* [stringToIterable](index.md#stringtoiterable)
* [stringToRegexp](index.md#stringtoregexp)
* [tokensToFunction](index.md#tokenstofunction)
* [tokensToRegexp](index.md#tokenstoregexp)

## Type aliases

###  HttpFilter

Ƭ **HttpFilter**: *function*

Defined in src/core/http4ts.ts:7

#### Type declaration:

▸ (`handler`: [HttpHandler](index.md#httphandler)): *Promise‹[HttpHandler](index.md#httphandler)› | [HttpHandler](index.md#httphandler)*

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [HttpHandler](index.md#httphandler) |

___

###  HttpHandler

Ƭ **HttpHandler**: *function*

Defined in src/core/http4ts.ts:3

#### Type declaration:

▸ (`req`: [HttpRequest](interfaces/httprequest.md)): *[HttpResponse](interfaces/httpresponse.md) | Promise‹[HttpResponse](interfaces/httpresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`req` | [HttpRequest](interfaces/httprequest.md) |

___

###  HttpMethod

Ƭ **HttpMethod**: *[HttpMethods](enums/httpmethods.md) | string*

Defined in src/core/http.ts:23

___

###  HttpQuery

Ƭ **HttpQuery**: *string | string[] | undefined | null*

Defined in src/core/http.ts:9

___

###  Match

Ƭ **Match**: *false | [MatchResult](interfaces/matchresult.md)‹P›*

Defined in src/core/routing/path-to-regexp.ts:365

A match is either `false` (no match) or a match result.

___

###  MatchFunction

Ƭ **MatchFunction**: *function*

Defined in src/core/routing/path-to-regexp.ts:370

The match function takes a string and returns whether it matched the path.

#### Type declaration:

▸ (`path`: string): *[Match](index.md#match)‹P›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

___

###  Path

Ƭ **Path**: *string | RegExp | Array‹string | RegExp›*

Defined in src/core/routing/path-to-regexp.ts:602

Supported `path-to-regexp` input types.

___

###  PathFunction

Ƭ **PathFunction**: *function*

Defined in src/core/routing/path-to-regexp.ts:261

#### Type declaration:

▸ (`data?`: P): *string*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | P |

___

###  RequestParams

Ƭ **RequestParams**: *object*

Defined in src/core/http-request/helpers.ts:6

#### Type declaration:

* **body**? : *[HttpBody](interfaces/httpbody.md) | string*

* **headers**? : *[RequestHttpHeaders](interfaces/requesthttpheaders.md)*

* **method**? : *[HttpMethod](index.md#httpmethod)*

* **url**: *string*

___

###  ResponeParams

Ƭ **ResponeParams**: *object*

Defined in src/core/http-response/helpers.ts:7

#### Type declaration:

* **body**? : *[HttpBody](interfaces/httpbody.md) | string*

* **headers**? : *[ResponseHttpHeaders](interfaces/responsehttpheaders.md)*

* **status**: *[HttpStatus](enums/httpstatus.md)*

___

###  RoutedHttpHandler

Ƭ **RoutedHttpHandler**: *function*

Defined in src/core/routing/routes.ts:11

#### Type declaration:

▸ (`req`: [RoutedHttpRequest](interfaces/routedhttprequest.md)): *[HttpResponse](interfaces/httpresponse.md) | Promise‹[HttpResponse](interfaces/httpresponse.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`req` | [RoutedHttpRequest](interfaces/routedhttprequest.md) |

___

###  Token

Ƭ **Token**: *string | [Key](interfaces/key.md)*

Defined in src/core/routing/path-to-regexp.ts:450

A token is a string (nothing special) or key metadata (capture group).

___

###  UriTemplate

Ƭ **UriTemplate**: *string*

Defined in src/core/routing/routes.ts:15

## Variables

### `Let` TheTextDecoder

• **TheTextDecoder**: *typeof TextDecoder*

Defined in src/core/env.ts:1

___

### `Let` TheTextEncoder

• **TheTextEncoder**: *typeof TextEncoder*

Defined in src/core/env.ts:2

## Functions

###  all

▸ **all**(`path`: [UriTemplate](index.md#uritemplate), `handler`: [RoutedHttpHandler](index.md#routedhttphandler)): *[RouteDefinition](interfaces/routedefinition.md)*

Defined in src/core/routing/routes.ts:106

Defines a route for the specified uri template no matter what http method used for the request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [UriTemplate](index.md#uritemplate) | Uri template to define the path for this route handler |
`handler` | [RoutedHttpHandler](index.md#routedhttphandler) | HttpHandler to be called when the request matches this route  |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)*

___

###  arrayToRegexp

▸ **arrayToRegexp**(`paths`: Array‹string | RegExp›, `keys?`: [Key](interfaces/key.md)[], `options?`: [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [ParseOptions](interfaces/parseoptions.md)): *RegExp*

Defined in src/core/routing/path-to-regexp.ts:479

Transform an array into a regexp.

**Parameters:**

Name | Type |
------ | ------ |
`paths` | Array‹string &#124; RegExp› |
`keys?` | [Key](interfaces/key.md)[] |
`options?` | [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [ParseOptions](interfaces/parseoptions.md) |

**Returns:** *RegExp*

___

###  asJson

▸ **asJson**<**T**>(`body`: [HttpBody](interfaces/httpbody.md)): *Promise‹T›*

Defined in src/core/http-body/helpers.ts:8

Deserializes the provided body and returns the parsed object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body` | [HttpBody](interfaces/httpbody.md) | HttpBody to be deserialized  |

**Returns:** *Promise‹T›*

___

###  compile

▸ **compile**<**P**>(`str`: string, `options?`: [ParseOptions](interfaces/parseoptions.md) & [TokensToFunctionOptions](interfaces/tokenstofunctionoptions.md)): *function*

Defined in src/core/routing/path-to-regexp.ts:254

Compile a string to a template function for the path.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`options?` | [ParseOptions](interfaces/parseoptions.md) & [TokensToFunctionOptions](interfaces/tokenstofunctionoptions.md) |

**Returns:** *function*

▸ (`data?`: P): *string*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | P |

___

###  defaultNotFoundHandler

▸ **defaultNotFoundHandler**(): *[HttpResponse](interfaces/httpresponse.md)*

Defined in src/core/routing/routes.ts:24

**Returns:** *[HttpResponse](interfaces/httpresponse.md)*

___

###  escapeString

▸ **escapeString**(`str`: string): *string*

Defined in src/core/routing/path-to-regexp.ts:425

Escape a regular expression string.

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

###  flags

▸ **flags**(`options?`: undefined | object): *"" | "i"*

Defined in src/core/routing/path-to-regexp.ts:432

Get the flags for a regexp from the options.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *"" | "i"*

___

###  get

▸ **get**(`path`: [UriTemplate](index.md#uritemplate), `handler`: [RoutedHttpHandler](index.md#routedhttphandler)): *[RouteDefinition](interfaces/routedefinition.md)*

Defined in src/core/routing/routes.ts:124

Defines a route for a GET request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [UriTemplate](index.md#uritemplate) | Uri template to define the path for this route handler |
`handler` | [RoutedHttpHandler](index.md#routedhttphandler) | HttpHandler to be called when the request matches this route  |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)*

___

###  iterableToString

▸ **iterableToString**(`it`: AsyncIterable‹Uint8Array | string›, `encoding`: string): *Promise‹string›*

Defined in src/core/http-body/string-encoding-utils.ts:8

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`it` | AsyncIterable‹Uint8Array &#124; string› | - |
`encoding` | string | "utf8" |

**Returns:** *Promise‹string›*

___

###  jsonBody

▸ **jsonBody**(`obj`: any): *[StringBody](classes/stringbody.md)‹›*

Defined in src/core/http-body/helpers.ts:18

Creates an HttpBody with the JSON representation of the provided object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | Object that should be serialized as JSON for body content  |

**Returns:** *[StringBody](classes/stringbody.md)‹›*

___

###  lexer

▸ **lexer**(`str`: string): *[LexToken](interfaces/lextoken.md)[]*

Defined in src/core/routing/path-to-regexp.ts:23

Tokenize input string.

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[LexToken](interfaces/lextoken.md)[]*

___

###  match

▸ **match**<**P**>(`str`: [Path](index.md#path), `options?`: [ParseOptions](interfaces/parseoptions.md) & [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [RegexpToFunctionOptions](interfaces/regexptofunctionoptions.md)): *function*

Defined in src/core/routing/path-to-regexp.ts:377

Create path match function from `path-to-regexp` spec.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`str` | [Path](index.md#path) |
`options?` | [ParseOptions](interfaces/parseoptions.md) & [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [RegexpToFunctionOptions](interfaces/regexptofunctionoptions.md) |

**Returns:** *function*

▸ (`path`: string): *[Match](index.md#match)‹P›*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

___

###  notFound

▸ **notFound**(`handler`: [RoutedHttpHandler](index.md#routedhttphandler)): *[RouteDefinition](interfaces/routedefinition.md)*

Defined in src/core/routing/routes.ts:147

Defines a fallback route when the request path does not match any routes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handler` | [RoutedHttpHandler](index.md#routedhttphandler) | HttpHandler to be called when the request matches this route  |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)*

___

###  parse

▸ **parse**(`str`: string, `options`: [ParseOptions](interfaces/parseoptions.md)): *[Token](index.md#token)[]*

Defined in src/core/routing/path-to-regexp.ts:142

Parse a string for the raw tokens.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`str` | string | - |
`options` | [ParseOptions](interfaces/parseoptions.md) | {} |

**Returns:** *[Token](index.md#token)[]*

___

###  pathToRegexp

▸ **pathToRegexp**(`path`: [Path](index.md#path), `keys?`: [Key](interfaces/key.md)[], `options?`: [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [ParseOptions](interfaces/parseoptions.md)): *RegExp‹›*

Defined in src/core/routing/path-to-regexp.ts:611

Normalize the given path string, returning a regular expression.

An empty array can be passed in for the keys, which will hold the
placeholder key descriptions. For example, using `/user/:id`, `keys` will
contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](index.md#path) |
`keys?` | [Key](interfaces/key.md)[] |
`options?` | [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [ParseOptions](interfaces/parseoptions.md) |

**Returns:** *RegExp‹›*

___

###  post

▸ **post**(`path`: [UriTemplate](index.md#uritemplate), `handler`: [RoutedHttpHandler](index.md#routedhttphandler)): *[RouteDefinition](interfaces/routedefinition.md)*

Defined in src/core/routing/routes.ts:136

Defines a route for a POST request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [UriTemplate](index.md#uritemplate) | Uri template to define the path for this route handler |
`handler` | [RoutedHttpHandler](index.md#routedhttphandler) | HttpHandler to be called when the request matches this route  |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)*

___

###  regexpToFunction

▸ **regexpToFunction**<**P**>(`re`: RegExp, `keys`: [Key](interfaces/key.md)[], `options`: [RegexpToFunctionOptions](interfaces/regexptofunctionoptions.md)): *[MatchFunction](index.md#matchfunction)‹P›*

Defined in src/core/routing/path-to-regexp.ts:389

Create a path match function from `path-to-regexp` output.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`re` | RegExp | - |
`keys` | [Key](interfaces/key.md)[] | - |
`options` | [RegexpToFunctionOptions](interfaces/regexptofunctionoptions.md) | {} |

**Returns:** *[MatchFunction](index.md#matchfunction)‹P›*

___

###  regexpToRegexp

▸ **regexpToRegexp**(`path`: RegExp, `keys?`: [Key](interfaces/key.md)[]): *RegExp*

Defined in src/core/routing/path-to-regexp.ts:455

Pull out keys from a regexp.

**Parameters:**

Name | Type |
------ | ------ |
`path` | RegExp |
`keys?` | [Key](interfaces/key.md)[] |

**Returns:** *RegExp*

___

###  req

▸ **req**(`__namedParameters`: object): *[HttpRequestImpl](classes/httprequestimpl.md)‹›*

Defined in src/core/http-request/helpers.ts:17

Instantiates an HttpResponse based on the provided data

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`body` | string &#124; [HttpBody](interfaces/httpbody.md)‹› | stringBody("") |
`headers` | [RequestHttpHeaders](interfaces/requesthttpheaders.md) | - |
`method` | string | HttpMethods.GET |
`url` | string | - |

**Returns:** *[HttpRequestImpl](classes/httprequestimpl.md)‹›*

___

###  res

▸ **res**(`__namedParameters`: object): *[HttpResponseImpl](classes/httpresponseimpl.md)‹›*

Defined in src/core/http-response/helpers.ts:17

Instantiates an HttpResponse object based on the provided status, body and headers

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`body` | string &#124; [HttpBody](interfaces/httpbody.md)‹› | stringBody("") |
`headers` | [ResponseHttpHeaders](interfaces/responsehttpheaders.md) | - |
`status` | [HttpStatus](enums/httpstatus.md) | - |

**Returns:** *[HttpResponseImpl](classes/httpresponseimpl.md)‹›*

___

###  route

▸ **route**(`method`: [HttpMethod](index.md#httpmethod), `path`: [UriTemplate](index.md#uritemplate), `handler`: [RoutedHttpHandler](index.md#routedhttphandler)): *[RouteDefinition](interfaces/routedefinition.md)*

Defined in src/core/routing/routes.ts:86

Defines a route for the provided request path and method

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`method` | [HttpMethod](index.md#httpmethod) | HttpMethod for the route to be matched |
`path` | [UriTemplate](index.md#uritemplate) | Uri template to define the path for this route handler |
`handler` | [RoutedHttpHandler](index.md#routedhttphandler) | HttpHandler to be called when the request matches this route  |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)*

___

###  routes

▸ **routes**(`firstRouteDefinition`: [RouteDefinition](interfaces/routedefinition.md), ...`otherRouteDefinitions`: [RouteDefinition](interfaces/routedefinition.md)[]): *[HttpHandler](index.md#httphandler)*

Defined in src/core/routing/routes.ts:37

Creates an HttpHandler based of the defined routes. You can use this function to define the application router.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`firstRouteDefinition` | [RouteDefinition](interfaces/routedefinition.md) | Use one of the route definition creators like `get`, `post`, `notFound`, `all` and `route` |
`...otherRouteDefinitions` | [RouteDefinition](interfaces/routedefinition.md)[] | Use one of the route definition creators like `get`, `post`, `notFound`, `all` and `route`. This is the rest parameter; Can be added indefinitely.  |

**Returns:** *[HttpHandler](index.md#httphandler)*

___

###  setupEnvironment

▸ **setupEnvironment**(`theTextDecoder`: typeof TextDecoder, `theTextEncoder`: typeof TextEncoder): *void*

Defined in src/core/env.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`theTextDecoder` | typeof TextDecoder |
`theTextEncoder` | typeof TextEncoder |

**Returns:** *void*

___

###  stringBody

▸ **stringBody**(`content`: string): *[StringBody](classes/stringbody.md)‹›*

Defined in src/core/http-body/helpers.ts:27

Creates an HttpBody with the provided content

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | string | Content of the body  |

**Returns:** *[StringBody](classes/stringbody.md)‹›*

___

###  stringToIterable

▸ **stringToIterable**(`content`: string): *AsyncGenerator‹Uint8Array‹›, void, unknown›*

Defined in src/core/http-body/string-encoding-utils.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *AsyncGenerator‹Uint8Array‹›, void, unknown›*

___

###  stringToRegexp

▸ **stringToRegexp**(`path`: string, `keys?`: [Key](interfaces/key.md)[], `options?`: [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [ParseOptions](interfaces/parseoptions.md)): *RegExp‹›*

Defined in src/core/routing/path-to-regexp.ts:491

Create a path regexp from string input.

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`keys?` | [Key](interfaces/key.md)[] |
`options?` | [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) & [ParseOptions](interfaces/parseoptions.md) |

**Returns:** *RegExp‹›*

___

###  tokensToFunction

▸ **tokensToFunction**<**P**>(`tokens`: [Token](index.md#token)[], `options`: [TokensToFunctionOptions](interfaces/tokenstofunctionoptions.md)): *[PathFunction](index.md#pathfunction)‹P›*

Defined in src/core/routing/path-to-regexp.ts:266

Expose a method for transforming tokens into the path function.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`tokens` | [Token](index.md#token)[] | - |
`options` | [TokensToFunctionOptions](interfaces/tokenstofunctionoptions.md) | {} |

**Returns:** *[PathFunction](index.md#pathfunction)‹P›*

___

###  tokensToRegexp

▸ **tokensToRegexp**(`tokens`: [Token](index.md#token)[], `keys?`: [Key](interfaces/key.md)[], `options`: [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md)): *RegExp‹›*

Defined in src/core/routing/path-to-regexp.ts:533

Expose a function for taking tokens and returning a RegExp.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`tokens` | [Token](index.md#token)[] | - |
`keys?` | [Key](interfaces/key.md)[] | - |
`options` | [TokensToRegexpOptions](interfaces/tokenstoregexpoptions.md) | {} |

**Returns:** *RegExp‹›*
