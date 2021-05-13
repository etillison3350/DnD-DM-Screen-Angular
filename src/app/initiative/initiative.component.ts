import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreatureDetails } from '../data/data.service';
import { InitiativeGroup } from './initiative';
import { InitiativeTrackerService } from './initiative-tracker.service';

const WEBSOCKET_URI = 'ws://localhost:7998';

@Component({
    selector: 'dmscreen-initiative',
    templateUrl: './initiative.component.html',
    styleUrls: ['./initiative.component.scss']
})
export class InitiativeComponent implements OnInit {

    // The list of tracked units
    public units: InitiativeGroup[];

    // Index of the active unit (unit taking their turn)
    public selectedUnit: number;

    // Observables for tracking connection information from the bot service
    public attachedChannels$: Observable<number>;
    public disableDiscord$: Observable<boolean>;
    private subscriptions: Subscription[] = [];

    constructor(public tracker: InitiativeTrackerService) {
        this.units = tracker.getUnits();
    }

    ngOnInit(): void {
        this.subscriptions.push(this.tracker.addedUnits().subscribe((index) => {
            if (this.selectedUnit == undefined)
                this.selectedUnit = 0;
            else if (this.selectedUnit >= index)
                this.selectedUnit++;
        }));

        this.subscriptions.push(this.tracker.removedUnits().subscribe(([startIndex, endIndex]) => {
            if (this.units.length == 0)
                this.selectedUnit = undefined;
            else if (this.selectedUnit >= endIndex)
                this.selectedUnit -= (endIndex - startIndex);
            else if (this.selectedUnit > startIndex)
                this.selectedUnit = startIndex;
        }));

        this.attachedChannels$ = this.tracker.numAttachedChannels();
        this.disableDiscord$ = this.tracker.numAttachedChannels().pipe(map(num => (!this.tracker.isConnected() || num == 0) && !this.tracker.isDisconnected()));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public handleDrop(event: DragEvent) {
        try {
            const data: CreatureDetails = JSON.parse(event.dataTransfer.getData('application/dmscreen/creature'));

            if ('name' in data && 'initiative' in data) {
                event.preventDefault();

                this.add({name: data.name, initiative: Math.floor(Math.random() * 20 + 1) + data.initiative});
            }
        } catch (err) {}
    }

    public handleDrag(event: DragEvent) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }

    public select(unit: InitiativeGroup) {
        let index = this.units.indexOf(unit);
        if (index >= 0) {
            this.selectedUnit = index;
            // unit.visible = true;
        }
    }

    public toggleVisibility(unit: InitiativeGroup) {
        unit.visible = !unit.visible;
    }

    public remove(unit: InitiativeGroup) {
        this.tracker.removeUnit(unit);
    }

    public add(unit: InitiativeGroup) {
        this.tracker.addUnit(unit);
    }

    public sort(): void {
        this.tracker.sort();
        this.selectedUnit = this.units.length - 1;
    }

    public next(): void {
        if (++this.selectedUnit >= this.units.length)
            this.selectedUnit = 0;
        this.units[this.selectedUnit].visible = true;
        this.tracker.nextUnit(this.units[this.selectedUnit], this.units[this.selectedUnit + 1 >= this.units.length ? 0 : this.selectedUnit + 1]);
    }

    public clear(): void {
        this.tracker.clear();
    }

    public discord(): void {
        if (!this.tracker.isConnected()) {
            this.tracker.connectToWebsocket(WEBSOCKET_URI);
        } else {
            this.tracker.requestInitiative();
        }
    }

    public copyId() {
        if (this.tracker.isConnected())
            navigator.clipboard.writeText(`$attach ${this.tracker.getId()}`)
    }

}
