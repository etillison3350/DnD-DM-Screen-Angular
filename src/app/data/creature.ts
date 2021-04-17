import { DiceRoll } from "./dice";

export class Creature {
    name: string;
    shortName: string;
    swarmSize?: Size;
    size: Size;
	type: CreatureType;
	subtype?: string;
	alignment: Alignment;
	ac: number;
	armorNote?: string;
    hitDice: DiceRoll;
    speed: Record<MovementType, number>;
    flyHover: boolean;
    abilityScores: Record<Ability, number>;
	savingThrows: Record<Ability, number>;
    skills: Record<Skill, number>;
    vulnerabilities: Record<string, DamageType[]>;
    resistances: Record<string, DamageType[]>;
    immunities: Record<string, DamageType[]>;
    conditionImmunities: Condition[];
    senses: Record<VisionType, number>;
    languages: string[];
    
    /* 
     * Values of -1, -2, -3, -4, and -5 correspond to 1/2, 1/4, 1/8, 0 (10XP) and 0 (0XP),
     * respectively. 0 also corresponds to 0 (0 XP)
     */
    challengeRating: number;

    // TODO
    features: string[];
    actions: string[];
    reactions: string[];
    legendaryActions: string[];
}

export enum Size {
    TINY = 4,
    SMALL = 6,
    MEDIUM = 8,
    LARGE = 10,
    HUGE = 12,
    GARGANTUAN = 20
}

export enum CreatureType {
    ABERRATION,
	BEAST,
	CELESTIAL,
	CONSTRUCT,
	DRAGON,
	ELEMENTAL,
	FEY,
	FIEND,
	GIANT,
	HUMANOID,
	MONSTROSITY,
	OOZE,
	PLANT,
	UNDEAD
}

export class Alignment {
    order?: 'lawful' | 'neutral' | 'chaotic' | 'any';
    moral?: 'good' | 'neutral' | 'evil' | 'any';

    static readonly LAWFUL_GOOD: Alignment = {order: 'lawful', moral: 'good'};
    static readonly LAWFUL_NEUTRAL: Alignment = {order: 'lawful', moral: 'neutral'};
    static readonly LAWFUL_EVIL: Alignment = {order: 'lawful', moral: 'evil'};
    static readonly NEUTRAL_GOOD: Alignment = {order: 'neutral', moral: 'good'};
    static readonly NEUTRAL: Alignment = {order: 'neutral', moral: 'neutral'};
    static readonly NEUTRAL_EVIL: Alignment = {order: 'neutral', moral: 'evil'};
    static readonly CHAOTIC_GOOD: Alignment = {order: 'chaotic', moral: 'good'};
    static readonly CHAOTIC_NEUTRAL: Alignment = {order: 'chaotic', moral: 'neutral'};
    static readonly CHAOTIC_EVIL: Alignment = {order: 'chaotic', moral: 'evil'};
    static readonly UNALIGNED: Alignment = {};
    static readonly ANY_ALIGNMENT: Alignment = {order: 'any', moral: 'any'};
}

export enum MovementType {
    WALK,
    BURROW,
    CLIMB,
    FLY,
    SWIM
}

export enum Ability {
    STRENGTH,
    DEXTERITY,
    CONSTITUTION,
    INTELLIGENCE,
    WISDOM,
    CHARISMA
}

export enum Skill {
    ACROBATICS,
	ANIMAL_HANDLING,
	ARCANA,
	ATHLETICS,
	DECEPTION,
	HISTORY,
	INSIGHT,
	INTIMIDATION,
	INVESTIGATION,
	MEDICINE,
	NATURE,
	PERCEPTION,
	PERFORMANCE,
	PERSUASION,
	RELIGION,
	SLEIGHT_OF_HAND,
	STEALTH,
	SURVIVAL
}

export enum DamageType {
    ACID,
	BLUDGEONING,
	COLD,
	FIRE,
	FORCE,
	LIGHTNING,
	NECROTIC,
	PIERCING,
	POISON,
	PSYCHIC,
	RADIANT,
	SLASHING,
	THUNDER
}

export enum Condition {
    BLINDED,
	CHARMED,
	DEAFENED,
    EXHAUSTION,
    FRIGHTENED,
	GRAPPLED,
	INCAPACITATED,
	INVISIBLE,
	PARALYZED,
	PETRIFIED,
	POISONED,
	PRONE,
	RESTRAINED,
	STUNNED,
	UNCONSCIOUS
}

export enum VisionType {
    BLINDSIGHT,
	DARKVISION,
	TREMORSENSE,
	TRUESIGHT
}
