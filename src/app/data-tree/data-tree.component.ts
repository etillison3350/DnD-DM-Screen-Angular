import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CreatureDetails, DataService, SpellDetails } from '../data/data.service';
import { Creature } from '../data/types/creature';
import { Spell } from '../data/types/spell';

@Component({
    selector: 'dmscreen-data-tree',
    templateUrl: './data-tree.component.html',
    styleUrls: ['./data-tree.component.scss']
})
export class DataTreeComponent implements OnInit {

    @Output()
    public selectUnit = new EventEmitter<Creature | Spell>();

    public data: {
        name: string,
        collapsed: boolean,
        values: {type: 'spells' | 'creatures', collapsed: boolean, values$: Observable<SpellDetails[]> | Observable<CreatureDetails[]>}[]
    }[];

    public searchTerm = new ReplaySubject<string>();

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.searchTerm.next('');

        this.dataService.getSources().subscribe(sources => {
            this.data = sources.map(source => ({
                name: source,
                collapsed: true,
                values: [
                    {
                        type: 'creatures',
                        collapsed: true,
                        values$: this.searchTerm.pipe(
                            distinctUntilChanged(),
                            debounceTime(500),
                            switchMap(term => this.dataService.getCreatureList(source, term.length > 0 ? term : undefined))
                        )
                    },
                    {
                        type: 'spells',
                        collapsed: true,
                        values$: this.searchTerm.pipe(
                            distinctUntilChanged(),
                            debounceTime(500),
                            switchMap(term => this.dataService.getSpellList(source, term.length > 0 ? term : undefined))
                        )
                    }
                ]
            }));
        });
    }

    public search(term: string) {
        this.searchTerm.next(term.trim());
    }

    public toggle(obj: {collapsed: boolean}) {
        obj.collapsed = !obj.collapsed;
    }

    public select(source: string, type: 'creatures' | 'spells', id: string): void {
        if (type == 'creatures') {
            this.dataService.getCreature(source, id).subscribe(creature => this.selectUnit.emit(creature));
        } else if (type == 'spells') {
            this.dataService.getSpell(source, id).subscribe(spell => this.selectUnit.emit(spell));
        }
    }

    public startDrag(obj: any, type: 'creatures' | 'spells', event: DragEvent) {
        // event.dataTransfer.setData('text/plain', JSON.stringify(obj));
        event.dataTransfer.setData(`application/dmscreen/${type.slice(0, -1)}`, JSON.stringify(obj));

        event.dataTransfer.dropEffect = 'copy';
    }

}
