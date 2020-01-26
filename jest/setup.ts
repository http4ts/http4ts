import { setupEnvironment } from "../src/core/env";
import { TextDecoder, TextEncoder } from "util";

setupEnvironment(TextDecoder as any, TextEncoder as any);
