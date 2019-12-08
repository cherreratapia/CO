import Product from './models/Product';
import Effect from './models/Effect';
import Rule from './models/Rule';
import CarInsurance from './models/CarInsurance';

const effectSellInMinusOne = new Effect('sellIn', '-', 1);
const effectPriceMinusOne = new Effect('Price', '-', 1);
const effectPriceAddOne = new Effect('Price', '+', 1);
const effectPriceAddTwo = new Effect('Price', '+', 2);
const effectPriceAddThree = new Effect('Price', '+', 3);
const effectPriceMinusTwo = new Effect('Price', '-', 2);
const effectPriceMinusFour = new Effect('Price', '-', 2);
const effectPriceToZero = new Effect('Price', '=', 0);
const effectPriceToFifty = new Effect('Price', '=', 50);

const rules: Rule[] = [
    new Rule('Medium Coverage', 'daily', 'sellIn', 0, effectSellInMinusOne),
    new Rule('Medium Coverage', 'greaterThan', 'price', 0, effectPriceMinusOne),
    new Rule('Medium Coverage', 'equal', 'price', 0, effectPriceToZero),
    new Rule('Low Coverage', 'daily', 'sellIn', 0, effectSellInMinusOne),
    new Rule('Low Coverage', 'greaterThan', 'price', 0, effectPriceMinusOne),
    new Rule('Low Coverage', 'equal', 'price', 0, effectPriceToZero),
    new Rule('Full Coverage', 'daily', 'sellIn', 0, effectSellInMinusOne),
    new Rule('Full Coverage', 'greaterThan', 'sellIn', 0, effectPriceAddOne),
    new Rule('Full Coverage', 'lessThanOrEqual', 'sellIn', 0, effectPriceAddTwo),
    new Rule('Full Coverage', 'greaterThan', 'price', 50, effectPriceToFifty),
    new Rule('Special Full Coverage', 'daily', 'sellIn', 0, effectSellInMinusOne),
    new Rule('Special Full Coverage', 'greaterThan', 'sellIn', 10, effectPriceMinusOne),
    new Rule('Special Full Coverage', 'lessThanOrEqual', 'sellIn', 10, effectPriceAddTwo),
    new Rule('Special Full Coverage', 'lessThanOrEqual', 'sellIn', 5, effectPriceAddThree),
    new Rule('Special Full Coverage', 'lessThanOrEqual', 'sellIn', 0, effectPriceToZero),
    new Rule('Super Sale', 'daily', 'sellIn', 0, effectSellInMinusOne),
    new Rule('Super Sale', 'greaterThan', 'sellIn', 0, effectPriceMinusTwo),
    new Rule('Super Sale', 'equal', 'sellIn', 0, effectPriceMinusFour),
    new Rule('Super Sale', 'lessThanOrEqual', 'price', 0, effectPriceToZero),
];

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
// const products = [new Product('Full Coverage', 2, 0)];
const carInsurance = new CarInsurance(products, rules);
carInsurance.simulatePrice(30);
