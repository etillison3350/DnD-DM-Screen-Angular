import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Creature } from '../data/types/creature';
import { Spell } from '../data/types/spell';

@Component({
    selector: 'dmscreen-stat-block',
    templateUrl: './stat-block.component.html',
    styleUrls: ['./stat-block.component.scss']
})
export class StatBlockComponent implements OnInit {

    private _data: Creature | Spell;

    @Input()
    public set data(data: Creature | Spell) {
        this._data = data;
        this.small = JSON.stringify(data || {}).length < 1166;
    };

    public get data() {
        return this._data;
    }

    public small: boolean;

    constructor() {}

    ngOnInit(): void {}

    public hasEntries(record: Record<any, any>): boolean {
        return Object.keys(record).length > 0;
    }

    public isCreature(data: any) {
        return 'creatureType' in data;
    }

    public isSpell(data: any) {
        return 'spellType' in data;
    }

}
