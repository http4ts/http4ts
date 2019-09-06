import { HttpRequestHeaders, HttpRequest } from "../../http";
import { routes, get, notFound, RoutedHttpRequest, post, all } from "../routes";

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
    const req: HttpRequest = {
      body: "somebody",
      headers: {},
      method: "GET",
      url: "/"
    };

    expect(routingHandler(req)).toEqual(slash());
  });

  test("GET /home should return home handler", () => {
    const req: HttpRequest = {
      body: "somebody",
      headers: {},
      method: "GET",
      url: "/home"
    };

    expect(routingHandler(req)).toEqual(home());
  });

  test("GET /articles/1 should return articles handler", () => {
    const req: HttpRequest = {
      body: "somebody",
      headers: {},
      method: "GET",
      url: "/articles/1"
    };

    expect(routingHandler(req)).toEqual(resp(200, "1"));
  });

  test("GET /company/carriers should return carriers handler", () => {
    const req: HttpRequest = {
      body: "somebody",
      headers: {},
      method: "GET",
      url: "/company/carriers"
    };

    expect(routingHandler(req)).toEqual(carriers());
  });

  test("GET /company/contacts should return contacts handler", () => {
    const req: HttpRequest = {
      body: "somebody",
      headers: {},
      method: "GET",
      url: "/company/contacts"
    };

    expect(routingHandler(req)).toEqual(contacts());
  });

  test("notFound handler should be called when there is no matched route", () => {
    const req: HttpRequest = {
      body: "somebody",
      headers: {},
      method: "GET",
      url: "/company/about"
    };

    expect(routingHandler(req)).toEqual(nf());
  });

  test("POST /submit-contact should return submitContact", () => {
    const req: HttpRequest = {
      body: "some form data",
      headers: {},
      method: "POST",
      url: "/submit-contact"
    };

    expect(routingHandler(req)).toEqual(submitContact());
  });

  test("POST and GET /all-methods should return allMethods", () => {
    const postReq: HttpRequest = {
      body: "some form data",
      headers: {},
      method: "POST",
      url: "/all-methods"
    };

    expect(routingHandler(postReq)).toEqual(allMethods(postReq));

    const getReq = { ...postReq, method: "GET" };
    expect(routingHandler(getReq)).toEqual(allMethods(getReq));
  });
});
