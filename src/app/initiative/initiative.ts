import { Creature } from "../data/types/creature";

export class InitiativeGroup {
    name: string;
    creature?: Creature;
    user?: string;
    initiative: number;
    visible?: boolean;
}