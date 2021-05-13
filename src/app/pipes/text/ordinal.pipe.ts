import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

    transform(value: number): string {
        let numString: string = value.toFixed(0);
        let ordinal: string;
        switch (numString.charAt(numString.length - 1)) {
            case '1':
                ordinal = 'st';
                break;
            case '2':
                ordinal = 'nd';
                break;
            case '3':
                ordinal = 'rd';
                break;
            default:
                ordinal = 'th';
                break;
        }
        return `${numString}${ordinal}`;
    }

}
