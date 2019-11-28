import { setupEnvironment } from "../src/env";
import { ReadableStream } from "web-streams-polyfill/ponyfill/es2018";
import { TextEncoder } from "util";

setupEnvironment(ReadableStream, TextEncoder);
