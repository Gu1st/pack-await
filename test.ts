import { describe, expect, test } from "@jest/globals";

import packAwait from "./src";

describe("await something", () => {
  test("test resolve", async () => {
    const exp = () => Promise.resolve("harexs");
    const [res, err] = await packAwait(exp());

    expect(res).toBe("harexs");
  });
});

describe("await something", () => {
  test("test reject", async () => {
    const exp = () => Promise.reject("harexs");
    const [res, err] = await packAwait(exp());

    expect(err).toBe("harexs");
  });
});

describe("await something", () => {
  test("test errObj", async () => {
    const exp = () => Promise.reject({ msg: "ok" });
    const [res, err] = await packAwait(exp(), { msg: "change ok" });

    expect((err as any).msg).toBe("change ok");
  });
});
