import {
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpMethod,
  HttpMethods
} from "../../http";
import { routes, get, notFound, RoutedHttpRequest, post, all } from "../routes";
import { HttpRequestImpl } from "../../HttpRequestImpl";
import { stringBody } from "../../http-body/helpers";

function resp(
  status = 200,
  body = "",
  headers: HttpHeaders = {}
): HttpResponse {
  return {
    status,
    body: stringBody(body),
    headers
  };
}

function request(url: string, body: string, method: HttpMethod): HttpRequest {
  return new HttpRequestImpl(url, method, stringBody(body));
}

describe("routes", () => {
  const slash = () => resp(200, "slash");
  const home = () => resp(200, "home");
  const carriers = () => resp(200, "carriers");
  const contacts = () => resp(200, "contacts");
  const articles = (req: RoutedHttpRequest) => resp(200, req.routeParams["id"]);
  const submitContact = () => resp(201, "received contact request");
  const allMethods = (req: HttpRequest) => resp(200, req.method);
  const nf = () => resp(400, "custom not found");

  const routingHandler = routes(
    get("/", slash),
    get("/home", home),
    get("/company/carriers", carriers),
    get("/company/contacts", contacts),
    get("/articles/:id", articles),
    post("/submit-contact", submitContact),
    all("/all-methods", allMethods),
    notFound(nf)
  );

  test("GET / should return slash handler", async () => {
    const req = request("/", "somebody", "GET");

    expect(await routingHandler(req)).toEqual(slash());
  });

  test("GET /home should return home handler", async () => {
    const req = request("/home", "somebody", "GET");

    expect(await routingHandler(req)).toEqual(home());
  });

  test("GET /articles/1 should return articles handler", async () => {
    const req = request("/articles/1", "somebody", "GET");

    expect(await routingHandler(req)).toEqual(resp(200, "1"));
  });

  test("GET /company should return not found", async () => {
    const req = request("/company", "somebody", "GET");

    expect(await routingHandler(req)).toEqual(nf());
  });

  test("GET /company/carriers should return carriers handler", async () => {
    const req = request("/company/carriers", "somebody", "GET");

    expect(await routingHandler(req)).toEqual(carriers());
  });

  test("GET /company/contacts should return contacts handler", async () => {
    const req = request("/company/contacts", "somebody", "GET");

    expect(await routingHandler(req)).toEqual(contacts());
  });

  test("notFound handler should be called when there is no matched route", async () => {
    const req = request("/company/about", "somebody", "GET");

    expect(await routingHandler(req)).toEqual(nf());
  });

  test("POST /submit-contact should return submitContact", async () => {
    const req = request("/submit-contact", "somebody", HttpMethods.POST);

    expect(await routingHandler(req)).toEqual(submitContact());
  });

  test("POST and GET /all-methods should return allMethods", async () => {
    const postReq = request("/all-methods", "some form data", HttpMethods.POST);

    expect(await routingHandler(postReq)).toEqual(allMethods(postReq));

    const getReq = new HttpRequestImpl(
      postReq.url,
      "GET",
      postReq.body,
      postReq.headers
    );

    expect(await routingHandler(getReq)).toEqual(allMethods(getReq));
  });
});
