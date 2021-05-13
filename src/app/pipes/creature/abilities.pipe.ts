import { Pipe, PipeTransform } from '@angular/core';
import { DiceRoll } from '../../data/types/dice';
import { Ability } from '../../data/types/properties';

@Pipe({
    name: 'abilities'
})
export class AbilitiesPipe implements PipeTransform {

    transform(value: Partial<Record<Ability, number>>, asScores?: boolean): {ability: Ability, score?: number, modifier: number, diceRoll: DiceRoll}[] {
        let rv: {ability: Ability, score?: number, modifier: number, diceRoll: DiceRoll}[] = [];
        for (let type in Ability) {
            if (value[Ability[type]]) {
                let val = value[Ability[type]];
                let mod: number, score: number;
                if (asScores) {
                    score = val;
                    mod = Math.floor((score - 10) / 2);
                } else {
                    mod = val;
                }
                
                rv.push({ability: Ability[type], score: score, modifier: mod, diceRoll: {dice: 1, sides: 20, modifier: mod}});
            }
        }
        return rv;
    }

    // transform(value: Partial<Record<Ability, number>>): string {
    //     let rv = ``;
    //     for (let type in Ability) {
    //         if (value[Ability[type]]) {
    //             if (rv.length > 0)
    //                 rv += ', '

    //             let mod = value[Ability[type]];
    //             rv += `${Ability[type].charAt(0).toUpperCase() + Ability[type].substring(1, 3)} ${(mod < 0 ? '' : '+')}${Math.floor(mod).toFixed(0)}`;
    //         }
    //     }
    //     return rv;
    // }

}
