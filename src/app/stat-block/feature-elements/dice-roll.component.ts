import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { DiceRoll, DiceRollResult } from 'src/app/data/types/dice';

@Component({
    selector: 'dmscreen-dice-roll',
    templateUrl: './dice-roll.component.html',
    styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {
    @Input() public diceRoll: DiceRoll;
    @Input() public text?: string;

    @ViewChild('tooltip') public tooltip: NgbTooltip;

    public result?: DiceRollResult;
    public detailedResult = false;

    public isCrit = false;

    ngOnInit(): void {}

    public roll(event?: MouseEvent): void {
        if (event)
            event.preventDefault();
        
        if (!this.tooltip.isOpen()) {
            this.result = new DiceRollResult(this.diceRoll);
            this.isCrit = this.result.diceRoll.dice == 1 && this.result.diceRoll.sides == 20 && (this.result.values[0] == 20 || this.result.values[0] == 1);

            this.tooltip.open();
        }
    }

    @HostListener('document:keydown', ['$event'])
    @HostListener('document:keyup', ['$event'])
    public checkShift(event: KeyboardEvent) {
        if (event.shiftKey != this.detailedResult)
            this.detailedResult = event.shiftKey;
    }

}
