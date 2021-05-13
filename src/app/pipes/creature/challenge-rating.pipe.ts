import { Pipe, PipeTransform } from '@angular/core';

const CR_VALUES = {
    [-5]: 0,
    [-4]: 10,
    [-3]: 25,
    [-2]: 50,
    [-1]: 100,
    [0]: 0,
    [1]: 200,
    [2]: 450,
    [3]: 700,
    [4]: 1100,
    [5]: 1800,
    [6]: 2300,
    [7]: 2900,
    [8]: 3900,
    [9]: 5000,
    [10]: 5900,
    [11]: 7200,
    [12]: 8400,
    [13]: 10000,
    [14]: 11500,
    [15]: 13000,
    [16]: 15000,
    [17]: 18000,
    [18]: 20000,
    [19]: 22000,
    [20]: 25000,
    [21]: 33000,
    [22]: 41000,
    [23]: 50000,
    [24]: 62000,
    [25]: 75000,
    [26]: 90000,
    [27]: 105000,
    [28]: 120000,
    [29]: 135000,
    [30]: 155000
}

@Pipe({
    name: 'challengeRating'
})
export class ChallengeRatingPipe implements PipeTransform {

    transform(value: number): string {
        let cr = value >= 0 ? value : (value <= -4 ? 0 : '1/' + (1 << -value));
        return `${cr} (${CR_VALUES[value].toLocaleString()} XP)`; 
    }

}
