import { Pipe, PipeTransform } from '@angular/core';
import { DiceRoll } from '../../data/types/dice';

@Pipe({
    name: 'diceRoll'
})
export class DiceRollPipe implements PipeTransform {

    transform(value: DiceRoll, hideExpectedValue?: boolean): string {
        if (value.sides == 1)
            return (value.dice + value.modifier).toFixed(0);
        let diceString = `${value.dice.toFixed(0)}d${value.sides.toFixed(0)}`;
        if (value.modifier > 0)
            diceString += `\u00A0+\u00A0${value.modifier.toFixed(0)}`;
        else if (value.modifier < 0)
            diceString += `\u00A0-\u00A0${(-value.modifier).toFixed(0)}`;
        
        if (hideExpectedValue)
            return diceString;
        else
            return `${Math.floor(value.expectedValue || DiceRoll.expectedValue(value.dice, value.sides, value.modifier)).toFixed(0)}\u00A0(${diceString})`;
    }

}
