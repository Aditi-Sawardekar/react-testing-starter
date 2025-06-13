import { defineConfig } from "vitest/config";

// Call defineConfig, give it test as an object,
// inside this object set environment to jsdom

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
