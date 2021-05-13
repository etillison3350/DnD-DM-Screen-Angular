import { Component, OnInit } from '@angular/core';
import { Creature } from './data/types/creature';
import { Spell } from './data/types/spell';

@Component({
    selector: 'dmscreen-root',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public selectedObject: Creature | Spell;

    constructor() {}

    ngOnInit(): void {}

    public selectObject(object: Creature | Spell): void {
        this.selectedObject = object;
    }

}
