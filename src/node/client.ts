import { request as httpsRequest } from "https";
import { request as httpRequest } from "http";
import { once } from "events";
import * as util from "util";
import * as stream from "stream";

import { HttpRequest, HttpResponse, res, BufferedBody } from "../core/mod";

const finished = util.promisify(stream.finished);

export async function send(req: HttpRequest): Promise<HttpResponse> {
  const url = new URL(req.url);

  const request = url.protocol === "https:" ? httpsRequest : httpRequest;

  return new Promise(async resolve => {
    const reqToSend = request(
      req.url,
      { method: req.method, headers: req.headers },
      response =>
        resolve(
          res({
            status: response.statusCode || 0, // 0? really?
            headers: response.headers,
            body: new BufferedBody(response)
          })
        )
    );

    for await (const chunk of req.body) {
      if (!reqToSend.write(Buffer.from(chunk))) {
        await once(reqToSend, "drain");
      }
    }
    reqToSend.end();
    await finished(reqToSend);
  });
}
