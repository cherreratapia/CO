import { Field } from './Rule';

export default class Effect {
    field: Field;
    symbol: string;
    operation: number;
    constructor(field: Field, symbol: string, operation: number) {
        this.field = field;
        this.symbol = symbol;
        this.operation = operation;
    }
}
