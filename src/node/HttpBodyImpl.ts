import { HttpBody } from "../http";

export class HttpBodyImpl implements HttpBody {
  constructor(public readonly stream: ReadableStream) {}

  async toString() {
    const chunks: any[] = [];
    const reader = this.stream.getReader();

    return new Promise<string>(async (resolve, reject) => {
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            resolve(Buffer.concat(chunks).toString("utf8"));
            break;
          }
          chunks.push(value);
        } catch (err) {
          reject(err);
          break;
        }
      }
    });
  }
}
