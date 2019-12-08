import Effect from "src/models/Effect";

describe("Rule clas", () => {
  it("Should create a rule with his effect associated", () => {
    const effect = new Effect("sellIn", "-", 1);
    const rule = new Rule("Medium Coverage", "daily", "sellIn", 0, effect);
    expect(rule).toBeDefined();
  });
});
