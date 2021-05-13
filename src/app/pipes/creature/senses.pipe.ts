import { Pipe, PipeTransform } from '@angular/core';
import { VisionType } from '../../data/types/properties';

@Pipe({
    name: 'senses'
})
export class SensesPipe implements PipeTransform {

    transform(value: {types: Partial<Record<VisionType, number>>, blind?: boolean}): string {
        let rv = '';
        for (let type in VisionType) {
            if (value.types[VisionType[type]]) {
                if (rv.length > 0)
                    rv += ', '
                rv += `${VisionType[type]} ${value.types[VisionType[type]]} ft.`;
                if (VisionType[type] == VisionType.BLINDSIGHT && value.blind)
                    rv += ' (blind beyond this radius)';
            }
        }
        return rv;
    }

}
