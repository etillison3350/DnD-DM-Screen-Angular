import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { DiceRollResult } from 'src/app/data/types/dice';
import { Attack } from 'src/app/data/types/feature';
import { DamageType } from 'src/app/data/types/properties';

@Component({
    selector: 'dmscreen-attack',
    templateUrl: './attack.component.html',
    styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

    @Input() public attack: Attack;

    @ViewChild('popover') public popover: NgbPopover;

    public result?: {attack: DiceRollResult, damage: {amount: DiceRollResult, type: DamageType}[], total: number};
    public detailedResult = false;

    public isCrit = false;
    public isCritFail = false;

    ngOnInit(): void {}

    public roll(event?: MouseEvent): void {
        if (event)
            event.preventDefault();

        if (!this.popover.isOpen()) {
            let attackResult = new DiceRollResult({dice: 1, sides: 20, modifier: this.attack.modifier});
            this.isCrit = attackResult.values[0] == 20;
            this.isCritFail = attackResult.values[0] == 1;

            let attackDamages = [];
            let total = 0;
            for (let damage of this.attack.damage) {
                let diceRoll = this.isCrit ? {dice: damage.amount.dice * 2, sides: damage.amount.sides, modifier: damage.amount.modifier} : damage.amount;
                let res = new DiceRollResult(diceRoll);
                attackDamages.push({amount: res, type: damage.type});

                total += res.sum;
            }
            this.result = {attack: attackResult, damage: attackDamages, total: total};

            this.popover.open();
        }
    }

    @HostListener('document:keydown', ['$event'])
    @HostListener('document:keyup', ['$event'])
    public checkShift(event: KeyboardEvent) {
        if (event.shiftKey != this.detailedResult)
            this.detailedResult = event.shiftKey;
    }

}
