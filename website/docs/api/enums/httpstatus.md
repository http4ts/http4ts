---
id: "httpstatus"
title: "HttpStatus"
sidebar_label: "HttpStatus"
---

[http4ts - v0.0.3](../index.md) › [HttpStatus](httpstatus.md)

## Index

### Enumeration members

* [ACCEPTED](httpstatus.md#accepted)
* [BAD_GATEWAY](httpstatus.md#bad_gateway)
* [BAD_REQUEST](httpstatus.md#bad_request)
* [CONFLICT](httpstatus.md#conflict)
* [CONTINUE](httpstatus.md#continue)
* [CREATED](httpstatus.md#created)
* [EXPECTATION_FAILED](httpstatus.md#expectation_failed)
* [FAILED_DEPENDENCY](httpstatus.md#failed_dependency)
* [FORBIDDEN](httpstatus.md#forbidden)
* [GATEWAY_TIMEOUT](httpstatus.md#gateway_timeout)
* [GONE](httpstatus.md#gone)
* [HTTP_VERSION_NOT_SUPPORTED](httpstatus.md#http_version_not_supported)
* [IM_A_TEAPOT](httpstatus.md#im_a_teapot)
* [INSUFFICIENT_SPACE_ON_RESOURCE](httpstatus.md#insufficient_space_on_resource)
* [INSUFFICIENT_STORAGE](httpstatus.md#insufficient_storage)
* [INTERNAL_SERVER_ERROR](httpstatus.md#internal_server_error)
* [LENGTH_REQUIRED](httpstatus.md#length_required)
* [LOCKED](httpstatus.md#locked)
* [METHOD_FAILURE](httpstatus.md#method_failure)
* [METHOD_NOT_ALLOWED](httpstatus.md#method_not_allowed)
* [MOVED_PERMANENTLY](httpstatus.md#moved_permanently)
* [MOVED_TEMPORARILY](httpstatus.md#moved_temporarily)
* [MULTIPLE_CHOICES](httpstatus.md#multiple_choices)
* [MULTI_STATUS](httpstatus.md#multi_status)
* [NETWORK_AUTHENTICATION_REQUIRED](httpstatus.md#network_authentication_required)
* [NON_AUTHORITATIVE_INFORMATION](httpstatus.md#non_authoritative_information)
* [NOT_ACCEPTABLE](httpstatus.md#not_acceptable)
* [NOT_FOUND](httpstatus.md#not_found)
* [NOT_IMPLEMENTED](httpstatus.md#not_implemented)
* [NOT_MODIFIED](httpstatus.md#not_modified)
* [NO_CONTENT](httpstatus.md#no_content)
* [OK](httpstatus.md#ok)
* [PARTIAL_CONTENT](httpstatus.md#partial_content)
* [PAYMENT_REQUIRED](httpstatus.md#payment_required)
* [PERMANENT_REDIRECT](httpstatus.md#permanent_redirect)
* [PRECONDITION_FAILED](httpstatus.md#precondition_failed)
* [PRECONDITION_REQUIRED](httpstatus.md#precondition_required)
* [PROCESSING](httpstatus.md#processing)
* [PROXY_AUTHENTICATION_REQUIRED](httpstatus.md#proxy_authentication_required)
* [REQUESTED_RANGE_NOT_SATISFIABLE](httpstatus.md#requested_range_not_satisfiable)
* [REQUEST_HEADER_FIELDS_TOO_LARGE](httpstatus.md#request_header_fields_too_large)
* [REQUEST_TIMEOUT](httpstatus.md#request_timeout)
* [REQUEST_TOO_LONG](httpstatus.md#request_too_long)
* [REQUEST_URI_TOO_LONG](httpstatus.md#request_uri_too_long)
* [RESET_CONTENT](httpstatus.md#reset_content)
* [SEE_OTHER](httpstatus.md#see_other)
* [SERVICE_UNAVAILABLE](httpstatus.md#service_unavailable)
* [SWITCHING_PROTOCOLS](httpstatus.md#switching_protocols)
* [TEMPORARY_REDIRECT](httpstatus.md#temporary_redirect)
* [TOO_MANY_REQUESTS](httpstatus.md#too_many_requests)
* [UNAUTHORIZED](httpstatus.md#unauthorized)
* [UNPROCESSABLE_ENTITY](httpstatus.md#unprocessable_entity)
* [UNSUPPORTED_MEDIA_TYPE](httpstatus.md#unsupported_media_type)
* [USE_PROXY](httpstatus.md#use_proxy)

## Enumeration members

###  ACCEPTED

• **ACCEPTED**: = 202

Defined in src/core/http-status.ts:7

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3

The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.

___

###  BAD_GATEWAY

• **BAD_GATEWAY**: = 502

Defined in src/core/http-status.ts:13

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3

This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

___

###  BAD_REQUEST

• **BAD_REQUEST**: = 400

Defined in src/core/http-status.ts:19

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1

This response means that server could not understand the request due to invalid syntax.

___

###  CONFLICT

• **CONFLICT**: = 409

Defined in src/core/http-status.ts:25

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8

This response is sent when a request conflicts with the current state of the server.

___

###  CONTINUE

• **CONTINUE**: = 100

Defined in src/core/http-status.ts:31

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1

This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.

___

###  CREATED

• **CREATED**: = 201

Defined in src/core/http-status.ts:37

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2

The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.

___

###  EXPECTATION_FAILED

• **EXPECTATION_FAILED**: = 417

Defined in src/core/http-status.ts:43

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14

This response code means the expectation indicated by the Expect request header field can't be met by the server.

___

###  FAILED_DEPENDENCY

• **FAILED_DEPENDENCY**: = 424

Defined in src/core/http-status.ts:49

Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5

The request failed due to failure of a previous request.

___

###  FORBIDDEN

• **FORBIDDEN**: = 403

Defined in src/core/http-status.ts:55

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3

The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.

___

###  GATEWAY_TIMEOUT

• **GATEWAY_TIMEOUT**: = 504

Defined in src/core/http-status.ts:61

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5

This error response is given when the server is acting as a gateway and cannot get a response in time.

___

###  GONE

• **GONE**: = 410

Defined in src/core/http-status.ts:67

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9

This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

___

###  HTTP_VERSION_NOT_SUPPORTED

• **HTTP_VERSION_NOT_SUPPORTED**: = 505

Defined in src/core/http-status.ts:73

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6

The HTTP version used in the request is not supported by the server.

___

###  IM_A_TEAPOT

• **IM_A_TEAPOT**: = 418

Defined in src/core/http-status.ts:79

Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2

Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.

___

###  INSUFFICIENT_SPACE_ON_RESOURCE

• **INSUFFICIENT_SPACE_ON_RESOURCE**: = 419

Defined in src/core/http-status.ts:83

UNOFFICIAL w/ NO DOCS

___

###  INSUFFICIENT_STORAGE

• **INSUFFICIENT_STORAGE**: = 507

Defined in src/core/http-status.ts:89

Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6

The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

___

###  INTERNAL_SERVER_ERROR

• **INTERNAL_SERVER_ERROR**: = 500

Defined in src/core/http-status.ts:95

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1

The server has encountered a situation it doesn't know how to handle.

___

###  LENGTH_REQUIRED

• **LENGTH_REQUIRED**: = 411

Defined in src/core/http-status.ts:101

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10

Server rejected the request because the Content-Length header field is not defined and the server requires it.

___

###  LOCKED

• **LOCKED**: = 423

Defined in src/core/http-status.ts:107

Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4

The resource that is being accessed is locked.

___

###  METHOD_FAILURE

• **METHOD_FAILURE**: = 420

Defined in src/core/http-status.ts:112

**`deprecated`** 
A deprecated response used by the Spring Framework when a method has failed.

___

###  METHOD_NOT_ALLOWED

• **METHOD_NOT_ALLOWED**: = 405

Defined in src/core/http-status.ts:118

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5

The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.

___

###  MOVED_PERMANENTLY

• **MOVED_PERMANENTLY**: = 301

Defined in src/core/http-status.ts:124

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2

This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.

___

###  MOVED_TEMPORARILY

• **MOVED_TEMPORARILY**: = 302

Defined in src/core/http-status.ts:130

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3

This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

___

###  MULTIPLE_CHOICES

• **MULTIPLE_CHOICES**: = 300

Defined in src/core/http-status.ts:142

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1

The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.

___

###  MULTI_STATUS

• **MULTI_STATUS**: = 207

Defined in src/core/http-status.ts:136

Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2

A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.

___

###  NETWORK_AUTHENTICATION_REQUIRED

• **NETWORK_AUTHENTICATION_REQUIRED**: = 511

Defined in src/core/http-status.ts:148

Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6

The 511 status code indicates that the client needs to authenticate to gain network access.

___

###  NON_AUTHORITATIVE_INFORMATION

• **NON_AUTHORITATIVE_INFORMATION**: = 203

Defined in src/core/http-status.ts:159

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.

___

###  NOT_ACCEPTABLE

• **NOT_ACCEPTABLE**: = 406

Defined in src/core/http-status.ts:165

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6

This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.

___

###  NOT_FOUND

• **NOT_FOUND**: = 404

Defined in src/core/http-status.ts:171

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4

The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.

___

###  NOT_IMPLEMENTED

• **NOT_IMPLEMENTED**: = 501

Defined in src/core/http-status.ts:177

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2

The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.

___

###  NOT_MODIFIED

• **NOT_MODIFIED**: = 304

Defined in src/core/http-status.ts:183

Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1

This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.

___

###  NO_CONTENT

• **NO_CONTENT**: = 204

Defined in src/core/http-status.ts:154

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5

There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

___

###  OK

• **OK**: = 200

Defined in src/core/http-status.ts:193

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1

The request has succeeded. The meaning of a success varies depending on the HTTP method:
GET: The resource has been fetched and is transmitted in the message body.
HEAD: The entity headers are in the message body.
POST: The resource describing the result of the action is transmitted in the message body.
TRACE: The message body contains the request message as received by the server

___

###  PARTIAL_CONTENT

• **PARTIAL_CONTENT**: = 206

Defined in src/core/http-status.ts:199

Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1

This response code is used because of range header sent by the client to separate download into multiple streams.

___

###  PAYMENT_REQUIRED

• **PAYMENT_REQUIRED**: = 402

Defined in src/core/http-status.ts:205

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2

This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.

___

###  PERMANENT_REDIRECT

• **PERMANENT_REDIRECT**: = 308

Defined in src/core/http-status.ts:211

Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3

This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.

___

###  PRECONDITION_FAILED

• **PRECONDITION_FAILED**: = 412

Defined in src/core/http-status.ts:217

Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2

The client has indicated preconditions in its headers which the server does not meet.

___

###  PRECONDITION_REQUIRED

• **PRECONDITION_REQUIRED**: = 428

Defined in src/core/http-status.ts:223

Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3

The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

___

###  PROCESSING

• **PROCESSING**: = 102

Defined in src/core/http-status.ts:229

Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1

This code indicates that the server has received and is processing the request, but no response is available yet.

___

###  PROXY_AUTHENTICATION_REQUIRED

• **PROXY_AUTHENTICATION_REQUIRED**: = 407

Defined in src/core/http-status.ts:235

Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2

This is similar to 401 but authentication is needed to be done by a proxy.

___

###  REQUESTED_RANGE_NOT_SATISFIABLE

• **REQUESTED_RANGE_NOT_SATISFIABLE**: = 416

Defined in src/core/http-status.ts:265

Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4

The range specified by the Range header field in the request can't be fulfilled, it's possible that the range is outside the size of the target URI's data.

___

###  REQUEST_HEADER_FIELDS_TOO_LARGE

• **REQUEST_HEADER_FIELDS_TOO_LARGE**: = 431

Defined in src/core/http-status.ts:241

Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5

The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.

___

###  REQUEST_TIMEOUT

• **REQUEST_TIMEOUT**: = 408

Defined in src/core/http-status.ts:247

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7

This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

___

###  REQUEST_TOO_LONG

• **REQUEST_TOO_LONG**: = 413

Defined in src/core/http-status.ts:253

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11

Request entity is larger than limits defined by server, the server might close the connection or return an Retry-After header field.

___

###  REQUEST_URI_TOO_LONG

• **REQUEST_URI_TOO_LONG**: = 414

Defined in src/core/http-status.ts:259

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12

The URI requested by the client is longer than the server is willing to interpret.

___

###  RESET_CONTENT

• **RESET_CONTENT**: = 205

Defined in src/core/http-status.ts:271

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6

This response code is sent after accomplishing request to tell user agent reset document view which sent this request.

___

###  SEE_OTHER

• **SEE_OTHER**: = 303

Defined in src/core/http-status.ts:277

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4

Server sent this response to directing client to get requested resource to another URI with an GET request.

___

###  SERVICE_UNAVAILABLE

• **SERVICE_UNAVAILABLE**: = 503

Defined in src/core/http-status.ts:283

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4

The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

___

###  SWITCHING_PROTOCOLS

• **SWITCHING_PROTOCOLS**: = 101

Defined in src/core/http-status.ts:289

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2

This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.

___

###  TEMPORARY_REDIRECT

• **TEMPORARY_REDIRECT**: = 307

Defined in src/core/http-status.ts:295

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7

Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.

___

###  TOO_MANY_REQUESTS

• **TOO_MANY_REQUESTS**: = 429

Defined in src/core/http-status.ts:301

Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4

The user has sent too many requests in a given amount of time ("rate limiting").

___

###  UNAUTHORIZED

• **UNAUTHORIZED**: = 401

Defined in src/core/http-status.ts:307

Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

___

###  UNPROCESSABLE_ENTITY

• **UNPROCESSABLE_ENTITY**: = 422

Defined in src/core/http-status.ts:313

Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3

The request was well-formed but was unable to be followed due to semantic errors.

___

###  UNSUPPORTED_MEDIA_TYPE

• **UNSUPPORTED_MEDIA_TYPE**: = 415

Defined in src/core/http-status.ts:319

Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13

The media format of the requested data is not supported by the server, so the server is rejecting the request.

___

###  USE_PROXY

• **USE_PROXY**: = 305

Defined in src/core/http-status.ts:326

**`deprecated`** 
Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.6

Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
