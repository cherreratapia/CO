import Product from './Product';
import Rule from './Rule';
import { isNumber } from 'util';

type stringAsKeyOptions = {
    [key: string]: any;
};

export default class CarInsurance {
    product: Product[];
    rule: Rule[];

    operations: stringAsKeyOptions = {
        '+': (origin: number, target: number) => origin + target,
        '-': (origin: number, target: number) => origin - target,
        '*': (origin: number, target: number) => origin * target,
        '/': (origin: number, target: number) => origin / target,
        '=': (origin: number, target: number) => target,
    };

    COMPARATORS: stringAsKeyOptions = {
        daily: (origin: number, target: number) => true,
        lessThan: (origin: number, target: number) => origin < target,
        lessThanOrEqual: (origin: number, target: number) => origin <= target,
        equal: (origin: number, target: number) => origin === target,
        greaterThan: (origin: number, target: number) => origin > target,
        greaterThanOrEqual: (origin: number, target: number) => origin >= target,
    };

    constructor(product: Product[], rule: Rule[]) {
        this.product = product;
        this.rule = rule;
    }
    executeRule = (rule: Rule, origin: number, target: number) => this.COMPARATORS[rule.comparator](origin, target);

    productPrinter = (product: Product) => {
        console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    };

    updatePrice = () => {
        this.product = this.product.map((product: Product) => {
            let { price, sellIn } = product;
            const rulesToApply = this.rule.filter(
                (rule: Rule) => product.name.toUpperCase() === rule.name.toUpperCase(),
            );
            if (rulesToApply.length > 0) {
                rulesToApply.map((rule: Rule) => {
                    if (rule.fieldToCompare.toUpperCase() === 'PRICE') {
                        const canApplyRule = this.executeRule(rule, price, rule.target);
                        if (canApplyRule) {
                            if (rule.effect.field.toUpperCase() === 'PRICE') {
                                price = this.operations[rule.effect.symbol](price, rule.effect.operation);
                            }
                            if (rule.effect.field.toUpperCase() === 'SELLIN') {
                                sellIn = this.operations[rule.effect.symbol](sellIn, rule.effect.operation);
                            }
                        }
                    }
                    if (rule.fieldToCompare.toUpperCase() === 'SELLIN') {
                        const canApplyRule = this.executeRule(rule, sellIn, rule.target);
                        if (canApplyRule) {
                            if (rule.effect.field.toUpperCase() === 'PRICE') {
                                price = this.operations[rule.effect.symbol](price, rule.effect.operation);
                            }
                            if (rule.effect.field.toUpperCase() === 'SELLIN') {
                                sellIn = this.operations[rule.effect.symbol](sellIn, rule.effect.operation);
                            }
                        }
                    }
                });
            }
            const newProduct = new Product(product.name, sellIn, price);
            this.productPrinter(newProduct);
            return newProduct;
        });
        return this.product;
    };

    simulatePrice = (days: number) => {
        let productUpdated: Product[] = [...this.product];
        console.log(`----------------- DÍA 0 -----------------`);
        this.product.map(this.productPrinter);
        console.log(`\n`);
        for (let index = 1; index <= days; index++) {
            console.log(`----------------- DÍA ${index} -----------------`);
            productUpdated = this.updatePrice();
            console.log(`\n`);
        }
        return productUpdated;
    };
}
