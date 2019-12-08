import { Field } from './Rule';

export default class Product {
    name: string;
    price: number;
    sellIn: number;
    constructor(name: string, sellIn: number, price: number) {
        this.name = name;
        this.price = price;
        this.sellIn = sellIn;
    }
}
