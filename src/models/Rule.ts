import Effect from './Effect';

export enum Field {
    SELLIN = 'sellIn',
    PRICE = 'price',
}

export default class Rule {
    name: string;
    comparator: string;
    fieldToCompare: Field;
    target: number;
    effect: Effect;
    constructor(name: string, comparator: string, fieldToCompare: Field, target: number, effect: Effect) {
        this.name = name;
        this.comparator = comparator;
        this.fieldToCompare = fieldToCompare;
        this.target = target;
        this.effect = effect;
    }
}
