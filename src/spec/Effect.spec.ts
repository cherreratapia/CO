import Effect from "../models/Effect";
describe("Creation of effect obj", () => {
  it("Should create an effect object", () => {
    const effect = new Effect("sellIn", "-", 1);
    expect(effect).toBeDefined();
  });
});
