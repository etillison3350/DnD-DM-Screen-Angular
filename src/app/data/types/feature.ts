import { DiceRoll } from "./dice";
import { DamageType } from "./properties";

export class Feature {
    name?: string;
    note?: string;
    description?: string;

    attack?: Attack;
    legendary?: boolean;
}

export class Attack {
    damage: {amount: DiceRoll, type: DamageType}[];
    melee: boolean;
    ranged: boolean;
    type: 'weapon' | 'spell';
    modifier: number;
    attackParameters: string;
}
