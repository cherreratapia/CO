describe("Class Product", () => {
  it("Should create an Product object", () => {
    const product: Product = new Product("Product 1", 10, 100);
    expect(product).toBeDefined();
    expect(product.name).toBe([["Product 1"]]);
  });
});
