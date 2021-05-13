import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './main.component';
import { DataTreeComponent } from './data-tree/data-tree.component';
import { EncounterComponent } from './encounter/encounter.component';
import { FeatureComponent } from './stat-block/feature.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { ModifierPipe } from './pipes/util/modifier.pipe';
import { DiceRollPipe } from './pipes/util/dice-roll.pipe';
import { AlignmentPipe } from './pipes/creature/alignment.pipe';
import { SpeedPipe } from './pipes/creature/speed.pipe';
import { JoinPipe } from './pipes/text/join.pipe';
import { DamagesPipe } from './pipes/creature/damages.pipe';
import { ChallengeRatingPipe } from './pipes/creature/challenge-rating.pipe';
import { AbilitiesPipe } from './pipes/creature/abilities.pipe';
import { SkillsPipe } from './pipes/creature/skills.pipe';
import { SensesPipe } from './pipes/creature/senses.pipe';
import { SentencecasePipe } from './pipes/text/sentencecase.pipe';
import { InitiativeAddComponent } from './initiative/initiative-add.component';
import { DiceRollComponent } from './stat-block/feature-elements/dice-roll.component';
import { TitleCasePipe } from './pipes/text/english-title-case.pipe';
import { FeaturePipe } from './pipes/creature/feature/feature.pipe';
import { ParseDiceRollPipe } from './pipes/util/parse-dice-roll.pipe';
import { ConditionComponent } from './stat-block/feature-elements/condition.component';
import { OrdinalPipe } from './pipes/text/ordinal.pipe';
import { AttackComponent } from './stat-block/feature-elements/attack.component';
import { ReplacePipe } from './pipes/text/replace.pipe';

@NgModule({
    declarations: [
        MainComponent,
        DataTreeComponent,
        EncounterComponent,
        FeatureComponent,
        InitiativeComponent,
        InitiativeAddComponent,
        StatBlockComponent,
        ConditionComponent,
        DiceRollComponent,

        DiceRollPipe,
        ModifierPipe,
        AlignmentPipe,
        SpeedPipe,
        JoinPipe,
        DamagesPipe,
        ChallengeRatingPipe,
        AbilitiesPipe,
        SkillsPipe,
        SensesPipe,
        SentencecasePipe,
        TitleCasePipe,
        FeaturePipe,
        ParseDiceRollPipe,
        OrdinalPipe,
        AttackComponent,
        ReplacePipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class AppModule {}
