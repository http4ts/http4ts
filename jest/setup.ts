import { setupEnvironment } from "../src/core/env";
import { TextDecoder } from "util";

setupEnvironment(TextDecoder as any);
