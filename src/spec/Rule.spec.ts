import Effect from '../models/Effect';
import Rule, { Field } from '../models/Rule';

describe('Rule clas', () => {
    it('Should create a rule with his effect associated', () => {
        const effect = new Effect(Field.SELLIN, '-', 1);
        const rule = new Rule('Medium Coverage', 'daily', Field.SELLIN, 0, effect);
        expect(rule).toBeDefined();
    });
});
