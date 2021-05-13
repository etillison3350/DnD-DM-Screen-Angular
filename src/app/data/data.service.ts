import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Creature } from './types/creature';
import { DiceRoll } from './types/dice';
import { Spell } from './types/spell';

const API_URL = 'http://localhost:7998/api/';

export type CreatureDetails = {
    id: string, 
    name: string,
    hitDice: DiceRoll,
    initiative: number
}

export type SpellDetails = {
    id: string,
    name: string
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}

    public getSources(): Observable<string[]> {
        return this.http.get<string[]>(API_URL + 'sources').pipe(catchError(this.handleError([])));
    }

    public getCreatureList(source: string, filter?: string): Observable<CreatureDetails[]> {
        if (filter)
            return this.http.get<CreatureDetails[]>(API_URL + `sources/${source}/creatures/?name=${filter}`).pipe(catchError(this.handleError([])));    
        return this.http.get<CreatureDetails[]>(API_URL + `sources/${source}/creatures`).pipe(catchError(this.handleError([])));
    }

    public getSpellList(source: string, filter?: string): Observable<SpellDetails[]> {
        if (filter)
            return this.http.get<SpellDetails[]>(API_URL + `sources/${source}/spells/?name=${filter}`).pipe(catchError(this.handleError([])));
        return this.http.get<SpellDetails[]>(API_URL + `sources/${source}/spells`).pipe(catchError(this.handleError([])));
    }

    public getCreature(source: string, id: string): Observable<Creature> {
        return this.http.get<Creature>(API_URL + `sources/${source}/creatures/${id}`).pipe(catchError(undefined));
    }

    public getSpell(source: string, id: string): Observable<Spell> {
        return this.http.get<Spell>(API_URL + `sources/${source}/spells/${id}`).pipe(catchError(undefined));
    }

    private handleError<T>(defaultValue: T): (err: any) => Observable<T> {
        return (err) => {
            // console.error(err);
            return of(defaultValue);
        }
    }

}
