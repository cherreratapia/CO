export default class Effect {
    field: string;
    symbol: string;
    operation: number;
    constructor(field: string, symbol: string, operation: number) {
        this.field = field;
        this.symbol = symbol;
        this.operation = operation;
    }
}
