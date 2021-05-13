import { Pipe, PipeTransform } from '@angular/core';
import { DiceRoll } from 'src/app/data/types/dice';

@Pipe({
    name: 'parseDiceRoll'
})
export class ParseDiceRollPipe implements PipeTransform {

    transform(value: string): DiceRoll {
        value = value.replace(/\s+/g, '');

        let match: RegExpMatchArray;
        if (match = value.match(/(\d+)\((\d+)?d(\d+)([+\-]\d+)?\)/)) {
            return {
                expectedValue: parseInt(match[1]),
                dice: match[2] ? parseInt(match[2]) : 1,
                sides: parseInt(match[3]),
                modifier: match[4] ? parseInt(match[4]) : 0
            };
        } else if (match = value.match(/(\d+)?(?:d(\d+))?([+\-]\d+)?/)) {
            return {
                dice: match[1] ? parseInt(match[1]) : 1,
                sides: match[2] ? parseInt(match[2]) : 1,
                modifier: match[3] ? parseInt(match[3]) : 0
            };
        }
        return null;
    }

}
