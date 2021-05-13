import { Pipe, PipeTransform } from '@angular/core';
import { Condition } from 'src/app/data/types/properties';

const FEATURE_REGEXES = {
    'diceroll': '(?:\\d+\\s*\\(\\s*(?:\\d+\\s*)?d\\s*\\d+(?:\\s*[+\\-]\\s*\\d+)?\\s*\\)|(?:\\d+\\s*)?d\\s*\\d+(?:\\s*[+\\-]\\s*\\d+)?)',
    'condition': '\\b(?:' + Object.values(Condition).join('|') + ')\\b',
    'link': '\\[.+?\\](?:\\(.+?\\))?',
    'bolditalic': '(?<sym>[*_]{1,3}).*?\\k<sym>',
};
const FEATURE_REGEX = new RegExp(Object.entries(FEATURE_REGEXES)
        .map(([type, regex]) => `(?<${type}>${regex})`)
        .join('|'), 'g');


@Pipe({
    name: 'featureComponents'
})
export class FeaturePipe implements PipeTransform {

    transform(value: string): {type: string, content: string}[] {
        if (!value)
            return [{type: 'text', content: value}];

        let rv: {type: string, content: string}[] = [];

        let lastEnd = 0;
        let match: RegExpExecArray;
        matchLoop: while (match = FEATURE_REGEX.exec(value)) {
            if (match.index > lastEnd) {
                rv.push({type: 'text', content: match.input.substring(lastEnd, match.index)});
            }
            lastEnd = match.index + match[0].length;
            
            for (let type of Object.keys(FEATURE_REGEXES)) {
                if (match.groups[type]) {
                    rv.push({type: type, content: match.groups[type]});
                    continue matchLoop;
                }
            }

            rv.push({type: 'text', content: match[0]});
        }
        if (lastEnd < value.length) {
            rv.push({type: 'text', content: value.substring(lastEnd)});
        }

        return rv;
    }

}
