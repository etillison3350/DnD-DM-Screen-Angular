import { Feature } from "./feature";
import { SpellType } from "./properties";

export class Spell {
    name: string;
    level: number;
    spellType: SpellType;
	ritual: boolean;
	castingTime: string;
	range: string;
    verbal: boolean;
    somatic: boolean;
    materialComponents?: string;
	duration: string;
	concentration: boolean;
    classes: string[];
	description: Feature[];
}
