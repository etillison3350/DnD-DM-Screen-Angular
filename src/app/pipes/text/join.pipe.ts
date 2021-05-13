import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {

    transform(value: any[], sep?: string): string {
        return value.join(sep || ', ');
    }

}
