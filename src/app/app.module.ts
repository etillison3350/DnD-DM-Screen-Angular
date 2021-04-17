import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { DataTreeComponent } from './data-tree/data-tree.component';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { EncounterComponent } from './encounter/encounter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        MainComponent,
        DataTreeComponent,
        StatBlockComponent,
        InitiativeComponent,
        EncounterComponent
    ],
    imports: [
        BrowserModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class AppModule {}
