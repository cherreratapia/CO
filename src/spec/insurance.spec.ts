import Product from '../models/Product';
import CarInsurance from '../models/CarInsurance';
import Effect from '../models/Effect';
import Rule from '../models/Rule';

describe('CarInsurance object', () => {
    const products = [
        new Product('Medium Coverage', 10, 10),
        new Product('Full Coverage', 10, 10),
        new Product('Mega Coverage', 1, 180),
        new Product('Special Full Coverage', 15, 10),
        new Product('Super Sale', 15, 10),
    ];

    const effectSellInMinusOne = new Effect('sellIn', '-', 1);
    const effectPriceMinusOne = new Effect('Price', '-', 1);
    const effectPriceAddOne = new Effect('Price', '+', 1);
    const effectPriceAddTwo = new Effect('Price', '+', 2);
    const effectPriceAddThree = new Effect('Price', '+', 3);
    const effectPriceMinusTwo = new Effect('Price', '-', 2);
    const effectPriceToZero = new Effect('Price', '=', 0);

    const rules: Rule[] = [
        new Rule('Medium Coverage', 'daily', 'sellIn', 0, effectSellInMinusOne),
        new Rule('Medium Coverage', 'daily', 'sellIn', 0, effectPriceMinusOne),
        new Rule('Full Coverage', 'daily', 'sellIn', 0, effectSellInMinusOne),
        new Rule('Full Coverage', 'daily', 'sellIn', 0, effectPriceAddOne),
        new Rule('Special Full Coverage', 'greaterThan', 'sellIn', 10, effectPriceMinusOne),
        new Rule('Special Full Coverage', 'daily', 'sellIn', 0, effectSellInMinusOne),
        new Rule('Special Full Coverage', 'lessThanOrEqual', 'sellIn', 10, effectPriceAddTwo),
        new Rule('Special Full Coverage', 'lessThanOrEqual', 'sellIn', 5, effectPriceAddThree),
        new Rule('Special Full Coverage', 'equal', 'sellIn', 0, effectPriceToZero),
        new Rule('Super Sale', 'daily', 'sellIn', 0, effectSellInMinusOne),
        new Rule('Super Sale', 'daily', 'sellIn', 0, effectPriceMinusTwo),
    ];
    const carInsurance = new CarInsurance(products, rules);
    it('Should create an Array of objects. Then create an insurance Product', () => {
        expect(carInsurance.product.length).toBe(5);
    });
    it('Should calculate the simulation of products at 30 days', () => {});
});
