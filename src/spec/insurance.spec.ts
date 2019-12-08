import Product from "../models/Product";
import CarInsurance from "../models/CarInsurance";

describe("CarInsurance object", () => {
  it("Should create an Array of objects. Then create an insurance Product", () => {
    const products = [
      new Product("Product 1", 10, 10),
      new Product("Product 2", 10, 10),
      new Product("Product 3", 4, 4)
    ];
    const carInsurance = new CarInsurance(products);
    expect(carInsurance.product.length).toBe(3);
  });
});
