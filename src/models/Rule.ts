import Effect from "./Effect";

export default class Rule {
  name: string;
  comparator: string;
  fieldToCompare: string;
  target: number;
  effect: Effect;
  constructor(
    name: string,
    comparator: string,
    fieldToCompare: string,
    target: number,
    effect: Effect
  ) {
    this.name = name;
    this.comparator = comparator;
    this.fieldToCompare = fieldToCompare;
    this.target = target;
    this.effect = effect;
  }
}
