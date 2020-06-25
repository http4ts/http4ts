import { HttpMethod, HttpRequest, HttpResponse, HttpMethods } from "../http.ts";
import { HttpHandler } from "../http4ts.ts";
import { pathToRegexp, Key } from "./path-to-regexp.ts";
import { HttpStatus } from "../http-status.ts";
import { res } from "../http-response/helpers.ts";
import { RoutedHttpRequestImpl } from "./routed-http-request-impl.ts";

export interface RoutedHttpRequest extends HttpRequest {
  routeParams: Record<string, string>;
}

export type RoutedHttpHandler = (
  req: RoutedHttpRequest
) => HttpResponse | Promise<HttpResponse>;

export type UriTemplate = string;

interface RouteDefinition {
  method?: HttpMethod;
  uriTemplate?: RegExp;
  keys?: Key[];
  handler: RoutedHttpHandler;
}

function defaultNotFoundHandler(): HttpResponse {
  return res({
    body: "Not Found",
    headers: {},
    status: HttpStatus.NOT_FOUND
  });
}

/**
 * Creates an HttpHandler based of the defined routes. You can use this function to define the application router.
 * @param firstRouteDefinition Use one of the route definition creators like `get`, `post`, `notFound`, `all` and `route`
 * @param otherRouteDefinitions Use one of the route definition creators like `get`, `post`, `notFound`, `all` and `route`. This is the rest parameter; Can be added indefinitely.
 */
export function routes(
  firstRouteDefinition: RouteDefinition,
  ...otherRouteDefinitions: RouteDefinition[]
): HttpHandler {
  let notFoundHandler: RoutedHttpHandler = defaultNotFoundHandler;
  const routeDefinitions = [firstRouteDefinition, ...otherRouteDefinitions];
  const lastDefinition = routeDefinitions[routeDefinitions.length - 1];
  if (
    !lastDefinition.method &&
    !lastDefinition.keys &&
    !lastDefinition.uriTemplate
  ) {
    notFoundHandler = lastDefinition.handler;
  }

  return req => {
    const foundRoute = routeDefinitions.find(rd => {
      if (rd.method && rd.uriTemplate) {
        return rd.method === req.method && rd.uriTemplate.test(req.url);
      } else if (rd.uriTemplate) {
        return rd.uriTemplate.test(req.url);
      }
    });

    if (foundRoute) {
      if (!foundRoute.uriTemplate || !foundRoute.keys) {
        throw new Error("Route should be templated.");
      }
      const result = foundRoute.uriTemplate.exec(req.url);
      if (!result) {
        throw new Error("Route didn't match!");
      }
      const routeParams = foundRoute.keys.reduce(
        (prev, cur, i) => ({ ...prev, [cur.name]: result[i + 1] }),
        {}
      );
      return foundRoute.handler(
        new RoutedHttpRequestImpl(
          req.url,
          req.method,
          req.body,
          req.headers,
          routeParams
        )
      );
    } else {
      return notFoundHandler(
        new RoutedHttpRequestImpl(
          req.url,
          req.method,
          req.body,
          req.headers,
          {}
        )
      );
    }
  };
}

/**
 * Defines a route for the provided request path and method
 * @param method HttpMethod for the route to be matched
 * @param path Uri template to define the path for this route handler
 * @param handler HttpHandler to be called when the request matches this route
 */
export function route(
  method: HttpMethod,
  path: UriTemplate,
  handler: RoutedHttpHandler
): RouteDefinition {
  const keys: Key[] = [];
  const uriTemplate = pathToRegexp(path, keys);
  return {
    method,
    uriTemplate,
    keys,
    handler
  };
}

/**
 * Defines a route for the specified uri template no matter what http method used for the request
 * @param path Uri template to define the path for this route handler
 * @param handler HttpHandler to be called when the request matches this route
 */
export function all(
  path: UriTemplate,
  handler: RoutedHttpHandler
): RouteDefinition {
  const keys: Key[] = [];
  const uriTemplate = pathToRegexp(path, keys);
  return {
    uriTemplate,
    keys,
    handler
  };
}

/**
 * Defines a route for a GET request
 * @param path Uri template to define the path for this route handler
 * @param handler HttpHandler to be called when the request matches this route
 */
export function get(
  path: UriTemplate,
  handler: RoutedHttpHandler
): RouteDefinition {
  return route(HttpMethods.GET, path, handler);
}

/**
 * Defines a route for a POST request
 * @param path Uri template to define the path for this route handler
 * @param handler HttpHandler to be called when the request matches this route
 */
export function post(
  path: UriTemplate,
  handler: RoutedHttpHandler
): RouteDefinition {
  return route(HttpMethods.POST, path, handler);
}

/**
 * Defines a fallback route when the request path does not match any routes
 * @param handler HttpHandler to be called when the request matches this route
 */
export function notFound(handler: RoutedHttpHandler): RouteDefinition {
  return {
    handler
  };
}
