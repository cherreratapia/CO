import Product from '../models/Product';
import CarInsurance from '../models/CarInsurance';
import Effect from '../models/Effect';
import Rule from '../models/Rule';
import { Field } from '../models/Rule';

describe('CarInsurance object', () => {
    const effectSellInMinusOne = new Effect(Field.SELLIN, '-', 1);
    const effectPriceMinusOne = new Effect(Field.PRICE, '-', 1);
    const effectPriceAddOne = new Effect(Field.PRICE, '+', 1);
    const effectPriceAddTwo = new Effect(Field.PRICE, '+', 2);
    const effectPriceAddThree = new Effect(Field.PRICE, '+', 3);
    const effectPriceMinusTwo = new Effect(Field.PRICE, '-', 2);
    const effectPriceMinusFour = new Effect(Field.PRICE, '-', 2);
    const effectPriceHalf = new Effect(Field.SELLIN, '/', 2);
    const effectPriceDouble = new Effect(Field.PRICE, '*', 2);
    const effectPriceToZero = new Effect(Field.PRICE, '=', 0);
    const effectPriceToFifty = new Effect(Field.PRICE, '=', 50);
    const rules: Rule[] = [
        new Rule('Medium Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
        new Rule('Medium Coverage', 'greaterThan', Field.PRICE, 0, effectPriceMinusOne),
        new Rule('Medium Coverage', 'equal', Field.PRICE, 0, effectPriceToZero),
        new Rule('Low Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
        new Rule('Low Coverage', 'greaterThan', Field.PRICE, 0, effectPriceMinusOne),
        new Rule('Low Coverage', 'equal', Field.PRICE, 0, effectPriceToZero),
        new Rule('Full Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
        new Rule('Full Coverage', 'greaterThan', Field.SELLIN, 0, effectPriceAddOne),
        new Rule('Full Coverage', 'lessThanOrEqual', Field.SELLIN, 0, effectPriceAddTwo),
        new Rule('Full Coverage', 'greaterThan', Field.PRICE, 50, effectPriceToFifty),
        new Rule('Special Full Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
        new Rule('Special Full Coverage', 'greaterThan', Field.SELLIN, 10, effectPriceMinusOne),
        new Rule('Special Full Coverage', 'lessThanOrEqual', Field.SELLIN, 10, effectPriceAddTwo),
        new Rule('Special Full Coverage', 'lessThanOrEqual', Field.SELLIN, 5, effectPriceAddThree),
        new Rule('Special Full Coverage', 'lessThanOrEqual', Field.SELLIN, 0, effectPriceToZero),
        new Rule('Super Sale', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
        new Rule('Super Sale', 'greaterThan', Field.SELLIN, 0, effectPriceMinusTwo),
        new Rule('Super Sale', 'equal', Field.SELLIN, 0, effectPriceMinusFour),
        new Rule('Super Sale', 'lessThanOrEqual', Field.PRICE, 0, effectPriceToZero),
    ];
    it('Should create an Array of objects. Then create an insurance Product', () => {
        const products = [
            new Product('Medium Coverage', 10, 20),
            new Product('Full Coverage', 2, 0),
            new Product('Low Coverage', 5, 7),
            new Product('Mega Coverage', 0, 80),
            new Product('Mega Coverage', -1, 80),
            new Product('Special Full Coverage', 15, 20),
            new Product('Special Full Coverage', 10, 49),
            new Product('Special Full Coverage', 5, 49),
            new Product('Super Sale', 3, 6),
        ];

        const carInsurance = new CarInsurance(products, rules);
        expect(carInsurance.product.length).toBe(9);
    });
    it('Should calculate the 30 days simulation', () => {
        const products = [
            new Product('Medium Coverage', 10, 20),
            new Product('Full Coverage', 2, 0),
            new Product('Low Coverage', 5, 7),
            new Product('Mega Coverage', 0, 80),
            new Product('Mega Coverage', -1, 80),
            new Product('Special Full Coverage', 15, 20),
            new Product('Special Full Coverage', 10, 49),
            new Product('Special Full Coverage', 5, 49),
            new Product('Super Sale', 3, 6),
        ];
        const carInsurance = new CarInsurance(products, rules);
        const productSimulated: Product[] = carInsurance.simulatePrice(30);
        expect(productSimulated[0].sellIn).toBe(-20);
        expect(productSimulated[0].price).toBe(0);
        expect(productSimulated[1].sellIn).toBe(-28);
        expect(productSimulated[1].price).toBe(50);
        expect(productSimulated[2].sellIn).toBe(-25);
        expect(productSimulated[2].price).toBe(0);
        expect(productSimulated[3].sellIn).toBe(0);
        expect(productSimulated[3].price).toBe(80);
        expect(productSimulated[4].sellIn).toBe(-1);
        expect(productSimulated[4].price).toBe(80);
        expect(productSimulated[5].sellIn).toBe(-15);
        expect(productSimulated[5].price).toBe(0);
        expect(productSimulated[6].sellIn).toBe(-20);
        expect(productSimulated[6].price).toBe(0);
        expect(productSimulated[7].sellIn).toBe(-25);
        expect(productSimulated[7].price).toBe(0);
        expect(productSimulated[8].sellIn).toBe(-27);
        expect(productSimulated[8].price).toBe(0);
    });
    it('Should calculate the 1 day simulation', () => {
        const products = [
            new Product('Medium Coverage', 10, 20),
            new Product('Full Coverage', 2, 0),
            new Product('Low Coverage', 5, 7),
            new Product('Mega Coverage', 0, 80),
            new Product('Mega Coverage', -1, 80),
            new Product('Special Full Coverage', 15, 20),
            new Product('Special Full Coverage', 10, 49),
            new Product('Special Full Coverage', 5, 49),
            new Product('Super Sale', 3, 6),
        ];
        const carInsurance = new CarInsurance(products, rules);
        const productSimulated: Product[] = carInsurance.updatePrice();
        expect(productSimulated[0].sellIn).toBe(9);
        expect(productSimulated[0].price).toBe(19);
        expect(productSimulated[1].sellIn).toBe(1);
        expect(productSimulated[1].price).toBe(1);
        expect(productSimulated[2].sellIn).toBe(4);
        expect(productSimulated[2].price).toBe(6);
        expect(productSimulated[3].sellIn).toBe(0);
        expect(productSimulated[3].price).toBe(80);
        expect(productSimulated[4].sellIn).toBe(-1);
        expect(productSimulated[4].price).toBe(80);
        expect(productSimulated[5].sellIn).toBe(14);
        expect(productSimulated[5].price).toBe(19);
        expect(productSimulated[6].sellIn).toBe(9);
        expect(productSimulated[6].price).toBe(51);
        expect(productSimulated[7].sellIn).toBe(4);
        expect(productSimulated[7].price).toBe(54);
        expect(productSimulated[8].sellIn).toBe(2);
        expect(productSimulated[8].price).toBe(4);
        productSimulated.map(carInsurance.productPrinter);
    });
    it('Should calculate the 1 day simulation with the comparators and operations remaining', () => {
        const products = [
            new Product('Medium Coverage', 10, 20),
            new Product('Full Coverage', 2, 0),
            new Product('Low Coverage', 5, 7),
            new Product('Mega Coverage', 0, 80),
            new Product('Mega Coverage', -1, 80),
            new Product('Special Full Coverage', 15, 20),
            new Product('Special Full Coverage', 10, 49),
            new Product('Special Full Coverage', 5, 49),
            new Product('Super Sale', 3, 6),
        ];
        const rules: Rule[] = [
            new Rule('Medium Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
            new Rule('Medium Coverage', 'greaterThan', Field.PRICE, 0, effectPriceMinusOne),
            new Rule('Medium Coverage', 'equal', Field.PRICE, 0, effectPriceToZero),
            new Rule('Medium Coverage', 'greaterThanOrEqual', Field.PRICE, 0, effectPriceHalf),
            new Rule('Low Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
            new Rule('Low Coverage', 'greaterThan', Field.PRICE, 0, effectPriceMinusOne),
            new Rule('Low Coverage', 'lessThan', Field.SELLIN, 5, effectPriceDouble),
            new Rule('Low Coverage', 'equal', Field.PRICE, 0, effectPriceToZero),
            new Rule('Full Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
            new Rule('Full Coverage', 'greaterThan', Field.SELLIN, 0, effectPriceAddOne),
            new Rule('Full Coverage', 'lessThanOrEqual', Field.SELLIN, 0, effectPriceAddTwo),
            new Rule('Full Coverage', 'greaterThan', Field.PRICE, 50, effectPriceToFifty),
            new Rule('Special Full Coverage', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
            new Rule('Special Full Coverage', 'greaterThan', Field.SELLIN, 10, effectPriceMinusOne),
            new Rule('Special Full Coverage', 'lessThanOrEqual', Field.SELLIN, 10, effectPriceAddTwo),
            new Rule('Special Full Coverage', 'lessThanOrEqual', Field.SELLIN, 5, effectPriceAddThree),
            new Rule('Special Full Coverage', 'lessThanOrEqual', Field.SELLIN, 0, effectPriceToZero),
            new Rule('Super Sale', 'daily', Field.SELLIN, 0, effectSellInMinusOne),
            new Rule('Super Sale', 'greaterThan', Field.SELLIN, 0, effectPriceMinusTwo),
            new Rule('Super Sale', 'equal', Field.SELLIN, 0, effectPriceMinusFour),
            new Rule('Super Sale', 'lessThanOrEqual', Field.SELLIN, 0, effectPriceToZero),
        ];
        const carInsurance = new CarInsurance(products, rules);
        const productSimulated: Product[] = carInsurance.updatePrice();
        expect(productSimulated[0].sellIn).toBe(4.5);
        expect(productSimulated[0].price).toBe(19);
        expect(productSimulated[1].sellIn).toBe(1);
        expect(productSimulated[1].price).toBe(1);
        expect(productSimulated[2].sellIn).toBe(4);
        expect(productSimulated[2].price).toBe(12);
        expect(productSimulated[3].sellIn).toBe(0);
        expect(productSimulated[3].price).toBe(80);
        expect(productSimulated[4].sellIn).toBe(-1);
        expect(productSimulated[4].price).toBe(80);
        expect(productSimulated[5].sellIn).toBe(14);
        expect(productSimulated[5].price).toBe(19);
        expect(productSimulated[6].sellIn).toBe(9);
        expect(productSimulated[6].price).toBe(51);
        expect(productSimulated[7].sellIn).toBe(4);
        expect(productSimulated[7].price).toBe(54);
        expect(productSimulated[8].sellIn).toBe(2);
        expect(productSimulated[8].price).toBe(4);
        productSimulated.map(carInsurance.productPrinter);
    });
});
