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

  addHeader(header: string, value: string | string[]) {
    if (this.headers[header]) {
      throw `Trying to add an existing header with name ${header}. You can use HttpRequest.replaceHeader instead.`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpRequestImpl(this.url, this.body, this.method, newHeaders);
  }

  replaceHeader(header: string, value: string | string[]) {
    if (!this.headers[header]) {
      throw `Trying to replace a non existing header with name ${header}. You can use HttpRequest.addHeader instead.`;
    }
    const newHeaders = {
      ...this.headers,
      [header]: value
    };
    return new HttpRequestImpl(this.url, this.body, this.method, newHeaders);
  }

  removeHeader(headerToRemove: string) {
    if (!this.headers[headerToRemove]) {
      throw `Trying to remove a non existing header with name ${headerToRemove}.`;
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
    const foundQuery = this.parsedUri.queryString.getAll(name);
    if (!foundQuery.length) {
      return undefined;
    }
    if (foundQuery.length === 1) {
      return foundQuery[0];
    }
    return foundQuery;
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
    if (!queryString.get(queryToRemove)) {
      throw `Trying to remove a non existing query with name ${queryToRemove}.`;
    }
    queryString.delete(queryToRemove);
    const newUrl = `${this.parsedUri.path}?${queryString.toString()}`;
    return new HttpRequestImpl(newUrl, this.body, this.method, this.headers);
  }

  replaceQuery(name: string, value: string | string[]) {
    const queryString = new URLSearchParams(
      this.parsedUri.queryString.toString()
    );
    if (!queryString.get(name)) {
      throw `Trying to replace a non existing query with name ${name}. You can use HttpRequest.addQuery instead.`;
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
