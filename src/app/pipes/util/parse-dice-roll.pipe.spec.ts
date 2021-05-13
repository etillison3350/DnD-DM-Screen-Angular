import { ParseDiceRollPipe } from './parse-dice-roll.pipe';

describe('ParseDiceRollPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseDiceRollPipe();
    expect(pipe).toBeTruthy();
  });
});
