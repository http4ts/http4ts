import { HttpStatus } from "../http-status";
import { HttpBody, HttpHeaders } from "../http";
import { stringBody } from "../http-body/helpers";
import { HttpResponseImpl } from "./http-response-impl";

type ResponeParams = {
  status: HttpStatus;
  body?: HttpBody;
  headers?: HttpHeaders;
};

export function res({
  status,
  body = stringBody(""),
  headers = {}
}: ResponeParams) {
  return new HttpResponseImpl(status, body, headers);
}
