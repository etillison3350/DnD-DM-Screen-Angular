import { combinations } from "mathjs";

export class DiceRoll {
    dice: number;
    sides: number;
    modifier: number;
    expectedValue?: number;

    /**
     * Calculates the probability that the sum of [dice] dice with [sides] sides, plus [modifier], is less than or equal to [value]
     * @param dice - the number of dice rolled
     * @param sides - the number of sides on each die
     * @param value - the upper limit value
     * @param modifier - number added to the sum the dice
     */
    public static cumulativeProbabilty(dice: number, sides: number, value: number, modifier = 0): number {
        value -= modifier;
        let invert = value > dice * (sides + 1) / 2;
        if (invert)
            value = dice * (sides + 1) - value - 1
        let ans = 0;
        for (let n = 0; n <= dice; n++) {
            let stars = value - n * sides;
            if (stars <= 0)
                break
            if (n % 2 == 0)
                ans += combinations(dice, n) * combinations(stars, dice);
            else
                ans -= combinations(dice, n) * combinations(stars, dice);
        }
        return invert ? (1 - ans / Math.pow(sides, dice)) : (ans / Math.pow(sides, dice));
    }

    public static expectedValue(dice: number, sides: number, modifier: number) {
        return 0.5 * ((sides + 1) * dice) + modifier;
    }
}

export class DiceRollResult {
    diceRoll: DiceRoll;
    sum: number;
    values: number[];

    constructor(diceRoll: DiceRoll, values?: number[]) {
        this.diceRoll = diceRoll;
        if (values) {
            this.values = values;
        } else {
            this.values = Array.from({length: diceRoll.dice}, () => Math.floor(Math.random() * diceRoll.sides + 1));
            if (diceRoll.modifier != 0)
                this.values.push(diceRoll.modifier);
        }

        this.sum = this.values.reduce((a, b) => a + b);
    }
}
