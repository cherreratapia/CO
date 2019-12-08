import Product from './Product';
import Rule from './Rule';

export default class CarInsurance {
    product: Product[];
    rule: Rule[];
    constructor(product: Product[], rule: Rule[]) {
        this.product = product;
        this.rule = rule;
    }
}
