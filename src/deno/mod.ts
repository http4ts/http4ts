import { setupEnvironment } from "./core/env.ts";

setupEnvironment(TextDecoder, TextEncoder);

export * from "./core/mod.ts";
export * from "./server.ts";
export * from "./client.ts";
