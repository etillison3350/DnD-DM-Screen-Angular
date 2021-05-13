import { Pipe, PipeTransform } from '@angular/core';
import { DiceRoll } from '../../data/types/dice';
import { Skill } from '../../data/types/properties';

@Pipe({
    name: 'skills'
})
export class SkillsPipe implements PipeTransform {

    transform(value: Partial<Record<Skill, number>>): {skill: Skill, modifier: number, diceRoll: DiceRoll}[] {
        let rv: {skill: Skill, modifier: number, diceRoll: DiceRoll}[] = [];
        for (let type in Skill) {
            if (value[Skill[type]]) {
                let mod = value[Skill[type]];
                rv.push({skill: Skill[type], modifier: mod, diceRoll: {dice: 1, sides: 20, modifier: mod}})
            }
        }
        return rv;
    }

    // transform(value: Partial<Record<Skill, number>>): string {
    //     let rv = ``;
    //     for (let type in Skill) {
    //         if (value[Skill[type]]) {
    //             if (rv.length > 0)
    //                 rv += ', '

    //             let mod = value[Skill[type]];
    //             rv += `${Skill[type].charAt(0).toUpperCase() + Skill[type].substring(1)} ${(mod < 0 ? '' : '+')}${Math.floor(mod).toFixed(0)}`;
    //         }
    //     }
    //     return rv;
    // }

}
