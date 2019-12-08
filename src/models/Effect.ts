export default class Effect {
  field: string;
  operation: string;
  operator: number;
  constructor(field: string, operation: string, operator: number) {
    this.field = field;
    this.operation = operation;
    this.operator = operator;
  }
}
