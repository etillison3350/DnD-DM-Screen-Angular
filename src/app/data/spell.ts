
export class Spell {
    name: string;
    level: number;
	type: SpellType;
	ritual: boolean;
	castingTime: string;
	range: string;
    verbal: boolean;
    somatic: boolean;
    materialComponents?: string;
	duration: string;
	concentration: boolean;
    classes: string[];
    // TODO
	description: string[];
}

export enum SpellType {
    ABJURATION,
	CONJURATION,
	DIVINATION,
	ENCHANTMENT,
	EVOCATION,
	ILLUSION,
	NECROMANCY,
	TRANSMUTATION
}
