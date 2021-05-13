import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InitiativeGroup } from './initiative';

@Component({
    selector: 'dmscreen-initiative-add',
    templateUrl: './initiative-add.component.html',
    styleUrls: ['./initiative-add.component.scss']
})
export class InitiativeAddComponent implements OnInit {

    // Form fields for adding new units
    public newUnitName = '';
    public newUnitAddRoll = true;
    public newUnitInitiative: number;

    // Output
    @Output()
    public addUnit = new EventEmitter<InitiativeGroup>();

    constructor() {}

    ngOnInit(): void {}

    public acceptUnit(form: NgForm) {
        this.addUnit.emit({name: form.value.unitName, initiative: (form.value.addRoll ? Math.floor(Math.random() * 20 + 1) : 0) + form.value.initiative});
        form.reset({addRoll: form.value.addRoll});
    }

}
