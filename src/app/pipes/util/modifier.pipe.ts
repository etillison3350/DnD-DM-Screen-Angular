import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'modifier'
})
export class ModifierPipe implements PipeTransform {

    transform(value: number): string {
        return (value < 0 ? '' : '+') + Math.floor(value).toFixed(0);
    }

}
