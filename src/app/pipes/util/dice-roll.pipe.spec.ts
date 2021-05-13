import { DiceRollPipe } from './dice-roll.pipe';

describe('DiceRollPipe', () => {
  it('create an instance', () => {
    const pipe = new DiceRollPipe();
    expect(pipe).toBeTruthy();
  });
});
