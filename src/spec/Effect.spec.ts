import Effect from '../models/Effect';
import { Field } from '../models/Rule';
describe('Creation of effect obj', () => {
    it('Should create an effect object', () => {
        const effect = new Effect(Field.SELLIN, '-', 1);
        expect(effect).toBeDefined();
    });
});
