import { DiceRoll } from "./dice";
import { Feature } from "./feature";
import { Ability, Alignment, Condition, CreatureType, DamageType, MovementType, Size, Skill, VisionType } from "./properties";

export class Creature {
    name: string;
    shortName?: string;
    swarmSize?: Size;
    size: Size;
	creatureType: CreatureType;
	subtype?: string;
	alignment: Alignment;
	ac: number;
	armorNote?: string;
    hitDice: DiceRoll;
    speed: {types: Partial<Record<MovementType, number>>, flyHover?: boolean};
    abilityScores: Record<Ability, number>;
	savingThrows: Partial<Record<Ability, number>>;
    skills: Partial<Record<Skill, number>>;
    vulnerabilities: Record<string, DamageType[]>;
    resistances: Record<string, DamageType[]>;
    immunities: Record<string, DamageType[]>;
    conditionImmunities: Condition[] = [];
    senses: {types: Partial<Record<VisionType, number>>, blind?: boolean};
    languages: string[] = [];
    
    /**
     * Values of -1, -2, -3, -4, and -5 correspond to 1/2, 1/4, 1/8, 0 (10XP) and 0 (0XP),
     * respectively. 0 also corresponds to 0 (0 XP)
     */
    challengeRating: number;

    features: Feature[] = [];
    actions: Feature[] = [];
    reactions: Feature[] = [];
    legendaryActions: Feature[] = [];
}
