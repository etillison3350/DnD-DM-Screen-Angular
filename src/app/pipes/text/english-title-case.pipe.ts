import { Pipe, PipeTransform } from '@angular/core';
import { titleCase } from "title-case";

@Pipe({
    name: 'engTitleCase'
})
export class TitleCasePipe implements PipeTransform {

    transform(value: any): string {
        return titleCase(value);
    }

}
