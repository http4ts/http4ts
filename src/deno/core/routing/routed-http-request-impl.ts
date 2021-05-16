import { HttpRequestImpl } from "../http-request/http-request-impl.ts";
import { RoutedHttpRequest } from "./routes.ts";
import { HttpMethod, HttpBody } from "../http.ts";
import { RequestHttpHeaders } from "../http-headers.ts";

export class RoutedHttpRequestImpl
  extends HttpRequestImpl
  implements RoutedHttpRequest
{
  constructor(
    public readonly url: string,
    public readonly method: HttpMethod,
    public readonly body: HttpBody,
    public readonly headers: RequestHttpHeaders,
    public readonly routeParams: Record<string, string>
  ) {
    super(url, method, body, headers);
  }
}
