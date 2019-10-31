import { HttpRequest, HttpMethod, HttpBody, HttpRequestHeaders } from "../http";
import { URLSearchParams } from "url";

interface URI {
  queryString: URLSearchParams;
  path: string;
}
export class HttpRequestImpl implements HttpRequest {
  private parsedUri: URI;

  constructor(
    public readonly url: string,
    public readonly body: HttpBody,
    public readonly method: HttpMethod,
    public readonly headers: HttpRequestHeaders = {}
  ) {
    const path = url.substring(0, url.indexOf("?"));
    const queryString = url.substring(url.indexOf("?"));
    this.parsedUri = {
      queryString: new URLSearchParams(queryString),
      path: path
    };
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
      [header]: value
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
    return this.parsedUri.queryString.getAll(name);
  }

  addQuery(name: string, value: string | string[]) {
    const queryString = new URLSearchParams(
      this.parsedUri.queryString.toString()
    );
    if (value instanceof Array) {
      if (!queryString.get(name) && value.length) {
        queryString.set(name, value.shift() || "");
      }
      value.forEach(qs => queryString.append(name, qs));
    } else {
      queryString.append(name, value);
    }
    const newUrl = `${this.parsedUri.path}?${queryString.toString()}`;
    return new HttpRequestImpl(newUrl, this.body, this.method, this.headers);
  }

  removeQuery(queryToRemove: string) {
    const queryString = new URLSearchParams(
      this.parsedUri.queryString.toString()
    );
    queryString.delete(queryToRemove);
    const newUrl = `${this.parsedUri.path}?${queryString.toString()}`;
    return new HttpRequestImpl(newUrl, this.body, this.method, this.headers);
  }

  replaceQuery(name: string, value: string | string[]) {
    const queryString = new URLSearchParams(
      this.parsedUri.queryString.toString()
    );
    if (!queryString.get(name)) {
      throw `Query ${name} does not exist`;
    }
    if (value instanceof Array) {
      queryString.delete(name);
      value.forEach(qs => queryString.append(name, qs));
    } else {
      queryString.set(name, value);
    }
    const newUrl = `${this.parsedUri.path}?${queryString.toString()}`;
    return new HttpRequestImpl(newUrl, this.body, this.method, this.headers);
  }

  path() {
    return this.parsedUri.path;
  }
}
