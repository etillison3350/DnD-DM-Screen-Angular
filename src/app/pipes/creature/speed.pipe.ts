import { Pipe, PipeTransform } from '@angular/core';
import { MovementType } from '../../data/types/properties';

@Pipe({
    name: 'speed'
})
export class SpeedPipe implements PipeTransform {

    transform(value: {types: Partial<Record<MovementType, number>>, flyHover?: boolean}): string {
        let rv = `${value.types[MovementType.WALK] || 0} ft.`;
        for (let type in MovementType) {
            if (MovementType[type] != MovementType.WALK && value.types[MovementType[type]]) {
                rv += `, ${MovementType[type]} ${value.types[MovementType[type]]} ft.`;
                if (MovementType[type] == MovementType.FLY && value.flyHover)
                    rv += ' (hover)';
            }
        }
        return rv;
    }

}
