import Product from './models/Product';
import Effect from './models/Effect';
import Rule, { Field } from './models/Rule';
import CarInsurance from './models/CarInsurance';

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
