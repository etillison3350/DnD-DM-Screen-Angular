import { Component, Input, OnInit } from '@angular/core';
import { Condition, CONDITION_DESCRIPTIONS } from 'src/app/data/types/properties';

@Component({
    selector: 'dmscreen-condition',
    templateUrl: './condition.component.html',
    styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {

    public readonly Array = Array;

    public readonly conditionDescriptions = CONDITION_DESCRIPTIONS;

    @Input() condition: Condition;

    ngOnInit(): void {}

}
