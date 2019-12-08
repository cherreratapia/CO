export default class Product {
  name: string;
  price: number;
  sellIn: number;
  constructor(name: string, price: number, sellIn: number) {
    this.name = name;
    this.price = price;
    this.sellIn = sellIn;
  }
}
