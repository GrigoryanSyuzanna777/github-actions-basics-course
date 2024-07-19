const jt = require("@jest/globals");

jt.describe("Simple integration test", () => {
    jt.test("First test", () => {
        jt.expect(3 + 5).toBe(8);
    });
});