import { HttpStatus } from "../http-status";
import { HttpBody } from "../http";
import { stringBody } from "../http-body/helpers";
import { HttpResponseImpl } from "./http-response-impl";
import { ResponseHttpHeaders } from "../http-headers";

type ResponseParams = {
  status: HttpStatus;
  body?: HttpBody | string;
  headers?: ResponseHttpHeaders;
};

type ResponseFactoyParams = Omit<ResponseParams, "status">;

/**
 * Instantiates an HttpResponse object based on the provided status, body and headers
 * @param obj The response representative object. Only status is mandatory.
 */
export function res({
  status,
  body = stringBody(""),
  headers = {}
}: ResponseParams) {
  const theBody = typeof body === "string" ? stringBody(body) : body;

  return new HttpResponseImpl(status, theBody, headers);
}

export function OK({ body, headers }: ResponseFactoyParams = {}) {
  return res({ status: HttpStatus.OK, body, headers });
}

export function NOT_FOUND({ body, headers }: ResponseFactoyParams = {}) {
  return res({ status: HttpStatus.NOT_FOUND, body, headers });
}

export function INTERNAL_SERVER_ERROR({
  body,
  headers
}: ResponseFactoyParams = {}) {
  return res({ status: HttpStatus.INTERNAL_SERVER_ERROR, body, headers });
}

export function BAD_REQUEST({ body, headers }: ResponseFactoyParams = {}) {
  return res({ status: HttpStatus.BAD_REQUEST, body, headers });
}

export function UNAUTHORIZED({ body, headers }: ResponseFactoyParams = {}) {
  return res({ status: HttpStatus.UNAUTHORIZED, body, headers });
}
