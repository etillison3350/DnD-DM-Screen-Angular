import { Pipe, PipeTransform } from '@angular/core';
import { DamageType } from '../../data/types/properties';

@Pipe({
    name: 'damages'
})
export class DamagesPipe implements PipeTransform {

    transform(value: Record<string, DamageType[]>): string {
        let rv = '';
        if ('' in value) {
            rv += value[''].join(', ');
        }

        for (let source in value) {
            if (source == '')
                continue;

            if (rv.length > 0)
                rv += '; ';
            rv += value[source].join(', ') + ' from ' + source;
        }

        return rv;
    }

}
