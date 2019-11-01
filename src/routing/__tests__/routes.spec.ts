import { HttpRequestHeaders, HttpRequest } from "../../http";
import { routes, get, notFound, RoutedHttpRequest, post, all } from "../routes";
import { HttpRequestImpl } from "../../node/http-request";

function resp(
  status: number = 200,
  body: string = "",
  headers: HttpRequestHeaders = {}
) {
  return {
    status,
    body,
    headers
  };
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

  test("GET / should return slash handler", () => {
    const req = new HttpRequestImpl("/", "somebody", "GET");

    expect(routingHandler(req)).toEqual(slash());
  });

  test("GET /home should return home handler", () => {
    const req = new HttpRequestImpl("/home", "somebody", "GET");

    expect(routingHandler(req)).toEqual(home());
  });

  test("GET /articles/1 should return articles handler", () => {
    const req = new HttpRequestImpl("/articles/1", "somebody", "GET");

    expect(routingHandler(req)).toEqual(resp(200, "1"));
  });

  test("GET /company/carriers should return carriers handler", () => {
    const req = new HttpRequestImpl("/company/carriers", "somebody", "GET");

    expect(routingHandler(req)).toEqual(carriers());
  });

  test("GET /company/contacts should return contacts handler", () => {
    const req = new HttpRequestImpl("/company/contacts", "somebody", "GET");

    expect(routingHandler(req)).toEqual(contacts());
  });

  test("notFound handler should be called when there is no matched route", () => {
    const req = new HttpRequestImpl("/company/about", "somebody", "GET");

    expect(routingHandler(req)).toEqual(nf());
  });

  test("POST /submit-contact should return submitContact", () => {
    const req = new HttpRequestImpl("/submit-contact", "somebody", "POST");

    expect(routingHandler(req)).toEqual(submitContact());
  });

  test("POST and GET /all-methods should return allMethods", () => {
    const postReq = new HttpRequestImpl(
      "/all-methods",
      "some form data",
      "POST"
    );

    expect(routingHandler(postReq)).toEqual(allMethods(postReq));

    const getReq = new HttpRequestImpl(
      postReq.url,
      postReq.body,
      "GET",
      postReq.headers
    );
    expect(routingHandler(getReq)).toEqual(allMethods(getReq));
  });
});
