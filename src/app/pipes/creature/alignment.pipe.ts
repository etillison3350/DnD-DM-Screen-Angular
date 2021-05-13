import { Pipe, PipeTransform } from '@angular/core';
import { Alignment } from '../../data/types/properties';

@Pipe({
    name: 'alignment'
})
export class AlignmentPipe implements PipeTransform {

    transform(value: Alignment): string {
        if (!value.order || !value.moral)
           return 'unaligned';
        if (value.order == 'any' && value.moral == 'any')
            return 'any alignment'
        if (value.order == 'any')
            return `any ${value.moral} alignment`;
        if (value.moral == 'any')
            return `any ${value.order} alignment`;
        if (value.order == 'neutral' && value.moral == 'neutral')
            return 'neutral';
        
        return value.order + ' ' + value.moral;
    }

}
