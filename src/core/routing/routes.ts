import { HttpMethod, HttpRequest, HttpResponse } from "../http";
import { HttpHandler } from "../http4ts";
import { pathToRegexp, Key } from "./path-to-regexp";
import { StringBody } from "../http-body/string-body";

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
  return {
    body: new StringBody("Not Found"),
    headers: {},
    status: 404
  };
}
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
      return foundRoute.handler({ ...req, routeParams });
    } else {
      return notFoundHandler({ ...req, routeParams: {} });
    }
  };
}

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

export function get(
  path: UriTemplate,
  handler: RoutedHttpHandler
): RouteDefinition {
  return route("GET", path, handler);
}

export function post(
  path: UriTemplate,
  handler: RoutedHttpHandler
): RouteDefinition {
  return route("POST", path, handler);
}

export function notFound(handler: RoutedHttpHandler): RouteDefinition {
  return {
    handler
  };
}
