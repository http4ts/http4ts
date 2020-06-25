import { HttpRequest, HttpMethod, HttpMethods } from "../../http";
import { routes, get, notFound, RoutedHttpRequest, post, all } from "../routes";
import { req } from "../../http-request/helpers";
import { res } from "../../http-response/helpers";
import { HttpStatus } from "../../../node";
import { RoutedHttpRequestImpl } from "../routed-http-request-impl";

function request(url: string, body: string, method: HttpMethod): HttpRequest {
  return req({ url, method, body });
}

describe("routes", () => {
  const slash = () => res({ status: 200, body: "slash" });
  const home = () => res({ status: 200, body: "home" });
  const carriers = () => res({ status: 200, body: "carriers" });
  const contacts = () => res({ status: 200, body: "contacts" });
  const articles = (req: RoutedHttpRequest) =>
    res({ status: 200, body: req.routeParams["id"] });
  const submitContact = () =>
    res({ status: 201, body: "received contact request" });
  const allMethods = (req: HttpRequest) =>
    res({ status: 200, body: req.method });
  const nf = () => res({ status: 400, body: "custom not found" });

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

    expect(await routingHandler(req)).toEqual(res({ status: 200, body: "1" }));
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

    const getReq = req({
      ...postReq,
      method: "GET"
    });

    expect(await routingHandler(getReq)).toEqual(allMethods(getReq));
  });

  test("request object input of routing handler should be a RoutedHttpRequestImpl", async () => {
    const postReq = request("/", "some form data", HttpMethods.POST);

    const handler = routes(
      post("/", req => {
        expect(req).toBeInstanceOf(RoutedHttpRequestImpl);
        return res({ status: HttpStatus.OK });
      })
    );

    const resp = await handler(postReq);

    expect(resp.status).toBe(HttpStatus.OK);
  });
});
