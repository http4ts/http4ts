import {
  HttpRequestHeaders,
  HttpRequest,
  HttpResponse,
  HttpMethod
} from "../../http";
import { routes, get, notFound, RoutedHttpRequest, post, all } from "../routes";
import { HttpRequestImpl } from "../../HttpRequestImpl";
import { HttpBodyImpl } from "../../HttpBodyImpl";

function resp(
  status = 200,
  body = "",
  headers: HttpRequestHeaders = {}
): HttpResponse {
  return {
    status,
    body: HttpBodyImpl.fromString(body),
    headers
  };
}

function request(url: string, body: string, method: HttpMethod): HttpRequest {
  return new HttpRequestImpl(url, HttpBodyImpl.fromString(body), method);
}

async function assertResponseEquality(
  actual: HttpResponse,
  expected: HttpResponse
) {
  const actualBody = await actual.body.asString();
  const expectedBody = await expected.body.asString();

  expect(actualBody).toEqual(expectedBody);
  expect(actual.headers).toEqual(expected.headers);
  expect(actual.status).toEqual(expected.status);
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

    await assertResponseEquality(await routingHandler(req), slash());
  });

  test("GET /home should return home handler", async () => {
    const req = request("/home", "somebody", "GET");

    await assertResponseEquality(await routingHandler(req), home());
  });

  test("GET /articles/1 should return articles handler", async () => {
    const req = request("/articles/1", "somebody", "GET");

    await assertResponseEquality(await routingHandler(req), resp(200, "1"));
  });

  test("GET /company should return not found", async () => {
    const req = request("/company", "somebody", "GET");

    await assertResponseEquality(await routingHandler(req), nf());
  });

  test("GET /company/carriers should return carriers handler", async () => {
    const req = request("/company/carriers", "somebody", "GET");

    await assertResponseEquality(await routingHandler(req), carriers());
  });

  test("GET /company/contacts should return contacts handler", async () => {
    const req = request("/company/contacts", "somebody", "GET");

    await assertResponseEquality(await routingHandler(req), contacts());
  });

  test("notFound handler should be called when there is no matched route", async () => {
    const req = request("/company/about", "somebody", "GET");

    await assertResponseEquality(await routingHandler(req), nf());
  });

  test("POST /submit-contact should return submitContact", async () => {
    const req = request("/submit-contact", "somebody", "POST");

    await assertResponseEquality(await routingHandler(req), submitContact());
  });

  test("POST and GET /all-methods should return allMethods", async () => {
    const postReq = request("/all-methods", "some form data", "POST");

    await assertResponseEquality(
      await routingHandler(postReq),
      allMethods(postReq)
    );

    const getReq = new HttpRequestImpl(
      postReq.url,
      postReq.body,
      "GET",
      postReq.headers
    );
    await assertResponseEquality(
      await routingHandler(getReq),
      allMethods(getReq)
    );
  });
});
