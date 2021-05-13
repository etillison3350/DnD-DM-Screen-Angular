export enum Size {
    TINY = 'tiny',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    HUGE = 'huge',
    GARGANTUAN = 'gargantuan'
}

export enum CreatureType {
    ABERRATION = 'aberration',
	BEAST = 'beast',
	CELESTIAL = 'celestial',
	CONSTRUCT = 'construct',
	DRAGON = 'dragon',
	ELEMENTAL = 'elemental',
	FEY = 'fey',
	FIEND = 'fiend',
	GIANT = 'giant',
	HUMANOID = 'humanoid',
	MONSTROSITY = 'monstrosity',
	OOZE = 'ooze',
	PLANT = 'plant',
	UNDEAD = 'undead'
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
    WALK = '',
    BURROW = 'burrow',
    CLIMB = 'climb',
    FLY = 'fly',
    SWIM = 'swim'
}

export enum Ability {
    STRENGTH = 'strength',
    DEXTERITY = 'dexterity',
    CONSTITUTION = 'constitution',
    INTELLIGENCE = 'intelligence',
    WISDOM = 'wisdom',
    CHARISMA = 'charisma'
}

export enum Skill {
    ACROBATICS = 'acrobatics',
	ANIMAL_HANDLING = 'animal handling',
	ARCANA = 'arcana',
	ATHLETICS = 'athletics',
	DECEPTION = 'deception',
	HISTORY = 'history',
	INSIGHT = 'insight',
	INTIMIDATION = 'intimidation',
	INVESTIGATION = 'investigation',
	MEDICINE = 'medicine',
	NATURE = 'nature',
	PERCEPTION = 'perception',
	PERFORMANCE = 'performance',
	PERSUASION = 'persuasion',
	RELIGION = 'religion',
	SLEIGHT_OF_HAND = 'sleight of hand',
	STEALTH = 'stealth',
	SURVIVAL = 'survival'
}

export enum VisionType {
    BLINDSIGHT = 'blindsight',
	DARKVISION = 'darkvision',
	TREMORSENSE = 'tremorsense',
	TRUESIGHT = 'truesight'
}

export enum DamageType {
    ACID = 'acid',
	BLUDGEONING = 'bludgeoning',
	COLD = 'cold',
	FIRE = 'fire',
	FORCE = 'force',
	LIGHTNING = 'lightning',
	NECROTIC = 'necrotic',
	PIERCING = 'piercing',
	POISON = 'poison',
	PSYCHIC = 'psychic',
	RADIANT = 'radiant',
	SLASHING = 'slashing',
	THUNDER = 'thunder'
}

export enum Condition {
    BLINDED = 'blinded',
	CHARMED = 'charmed',
	DEAFENED = 'deafened',
    EXHAUSTION = 'exhaustion',
    FRIGHTENED = 'frightened',
	GRAPPLED = 'grappled',
	INCAPACITATED = 'incapacitated',
	INVISIBLE = 'invisible',
	PARALYZED = 'paralyzed',
	PETRIFIED = 'petrified',
	POISONED = 'poisoned',
	PRONE = 'prone',
	RESTRAINED = 'restrained',
	STUNNED = 'stunned',
	UNCONSCIOUS = 'unconscious'
}

export enum SpellType {
    ABJURATION = 'abjuration',
	CONJURATION = 'conjuration',
	DIVINATION = 'divination',
	ENCHANTMENT = 'enchantment',
	EVOCATION = 'evocation',
	ILLUSION = 'illusion',
	NECROMANCY = 'necromancy',
	TRANSMUTATION = 'transmutation'
}

export const CONDITION_DESCRIPTIONS = {
	[Condition.BLINDED]: [
		"A blinded creature can't see and automatically fails any ability check that requires sight.",
		"Attack rolls against the creature have advantage, and the creature's Attack rolls have disadvantage."
	],
	[Condition.CHARMED]: [
		"A charmed creature can't Attack the charmer or target the charmer with harmful Abilities or magical effects.",
		"The charmer has advantage on any ability check to interact socially with the creature."
	],
	[Condition.DEAFENED]: [
		"A deafened creature can't hear and automatically fails any ability check that requires hearing."
	],
	[Condition.EXHAUSTION]: [
		"Some special abilities and environmental hazards, such as starvation and the long-term effects of freezing or scorching temperatures, can lead to a special condition called exhaustion. Exhaustion is measured in six levels. An effect can give a creature one or more levels of exhaustion, as specified in the effect's description.",
		[
			"Lv.    Effect",
			" 1      Disadvantage on ability checks",
			" 2      Speed halved",
			" 3      Disadvantage on attack rolls and saving throws",
			" 4      Hit point maximum halved",
			" 5      Speed reduced to 0",
			" 6      Death"
		],
		"If an already exhausted creature suffers another effect that causes exhaustion, its current level of exhaustion increases by the amount specified in the effect's description.",
		"A creature suffers the effect of its current level of exhaustion as well as all lower levels. For example, a creature suffering level 2 exhaustion has its speed halved and has disadvantage on ability checks.",
		"An effect that removes exhaustion reduces its level as specified in the effect's description, with all exhaustion effects ending if a creature's exhaustion level is reduced below 1.",
		"Finishing a long rest reduces a creature's exhaustion level by 1, provided that the creature has also ingested some food and drink."
	],
	[Condition.FRIGHTENED]: [
		"A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight.",
		"The creature can't willingly move closer to the source of its fear."
	],
	[Condition.GRAPPLED]: [
		"A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
		"The condition ends if the Grappler is incapacitated (see the condition).",
		"The condition also ends if an effect removes the grappled creature from the reach of the Grappler or Grappling effect, such as when a creature is hurled away by the Thunderwave spell."
	],
	[Condition.INCAPACITATED]: [
		"An incapacitated creature can't take actions or reactions."
	],
	[Condition.INVISIBLE]: [
		"An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.",
		"Attack rolls against the creature have disadvantage, and the creature's Attack rolls have advantage."
	],
	[Condition.PARALYZED]: [
		"A paralyzed creature is incapacitated (see the condition) and can't move or speak.",
		"The creature automatically fails Strength and Dexterity saving throws.",
		"Attack rolls against the creature have advantage.",
		"Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
	],
	[Condition.PETRIFIED]: [
		"A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.",
		"The creature is incapacitated (see the condition), can't move or speak, and is unaware of its surroundings.",
		"Attack rolls against the creature have advantage.",
		"The creature automatically fails Strength and Dexterity saving throws.",
		"The creature has Resistance to all damage.",
		"The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized."
	],
	[Condition.POISONED]: [
		"A poisoned creature has disadvantage on Attack rolls and Ability Checks."
	],
	[Condition.PRONE]: [
		"A prone creature's only Movement option is to crawl, unless it stands up and thereby ends the condition.",
		"The creature has disadvantage on Attack rolls.",
		"An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage."
	],
	[Condition.RESTRAINED]: [
		"A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
		"Attack rolls against the creature have advantage, and the creature's Attack rolls have disadvantage.",
		"The creature has disadvantage on Dexterity saving throws."
	],
	[Condition.STUNNED]: [
		"A stunned creature is incapacitated (see the condition), can't move, and can speak only falteringly.",
		"The creature automatically fails Strength and Dexterity saving throws.",
		"Attack rolls against the creature have advantage."
	],
	[Condition.UNCONSCIOUS]: [
		"An unconscious creature is incapacitated (see the condition), can't move or speak, and is unaware of its surroundings.",
		"The creature drops whatever it's holding and falls prone.",
		"The creature drops whatever it's holding and falls prone.",
		"The creature automatically fails Strength and Dexterity saving throws.",
		"Attack rolls against the creature have advantage.",
		"Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
	]
};

