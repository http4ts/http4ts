import { setupEnvironment } from "../src/core/env";
import { ReadableStream } from "web-streams-polyfill/ponyfill/es2018";
import { TextDecoder } from "util";

setupEnvironment(ReadableStream, TextDecoder as any);
