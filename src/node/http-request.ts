import { HttpRequest, HttpMethod, HttpBody, HttpRequestHeaders } from "../http";
import { ParsedUrl, ParsedQuery, parseUrl, stringify } from "query-string";

export class HttpRequestImpl implements HttpRequest {
  private parsedUrl: ParsedUrl;

  constructor(
    public readonly url: string,
    public readonly body: HttpBody,
    public readonly method: HttpMethod,
    public readonly headers: HttpRequestHeaders = {}
  ) {
    this.parsedUrl = parseUrl(url);
  }

  bodyToJson() {
    return JSON.parse(this.body);
  }

  replaceHeader(header: string, value: string | string[]) {
    if (!this.headers[header]) {
      throw `Header ${header} does not exist`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value,
    };
    return new HttpRequestImpl(this.url, this.body, this.method, newHeaders);
  }

  removeHeader(headerToRemove: string) {
    if (!this.headers[headerToRemove]) {
      throw `Header ${headerToRemove} does not exist`;
    }
    const newHeaders = Object.keys(this.headers).reduce(
      (headers: HttpRequestHeaders, header) => {
        if (header !== headerToRemove) {
          headers[header] = this.headers[header];
        }
        return headers;
      },
      {}
    );
    return new HttpRequestImpl(this.url, this.body, this.method, newHeaders);
  }

  query(name: string) {
    return this.parsedUrl.query[name];
  }

  addQuery(name: string, value: string | string[]) {
    const newQuery = {
      ...this.query,
      [name]: value,
    };
    const newUrl = `${this.parsedUrl.url}?${stringify(newQuery)}`;
    return new HttpRequestImpl(newUrl, this.body, this.method, this.headers);
  }

  removeQuery(queryToRemove: string) {
    const newQuery = Object.keys(this.parsedUrl.query).reduce(
      (query: ParsedQuery, currentQuery) => {
        if (currentQuery !== queryToRemove) {
          query[currentQuery] = this.headers[currentQuery];
        }
        return query;
      },
      {}
    );
    const newUrl = `${this.parsedUrl.url}?${stringify(newQuery)}`;
    return new HttpRequestImpl(newUrl, this.body, this.method, this.headers);
  }

  replaceQuery(name: string, value: string | string[]) {
    if (!this.parsedUrl.query[name]) {
      throw `Query ${name} does not exist`;
    }
    return this.addQuery(name, value);
  }

  path() {
    return this.parsedUrl.url;
  }
}
