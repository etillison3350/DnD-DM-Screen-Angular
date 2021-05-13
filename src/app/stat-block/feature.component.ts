import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../data/types/feature';

@Component({
    selector: 'dmscreen-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

    @Input() feature?: Feature;

    constructor() {}

    ngOnInit(): void {}
    
}
