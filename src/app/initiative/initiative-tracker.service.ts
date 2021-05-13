import { Injectable } from '@angular/core';
import { Socket } from "socket.io-client";
import io from 'socket.io-client';
import { InitiativeGroup } from './initiative';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InitiativeTrackerService {

    public client: Socket;

    private units: InitiativeGroup[] = [];

    private attachedChannels$ = new BehaviorSubject<number>(0);
    private addedUnits$ = new Subject<number>();
    private removedUnits$ = new Subject<[number, number]>();

    private nextUnits$ = new Subject<[string, string]>();

    constructor() {
        this.nextUnits$.pipe(debounceTime(500)).subscribe(([cur, nxt]) => {
            if (this.client) {
                this.client.emit('next-unit', cur, nxt);
            }
        });
    }

    public connectToWebsocket(uri: string) {
        if (!this.client) {
            this.client = io(uri);

            this.client.on('disconnect', (reason) => {
                console.log(`Disconnected from websocket (${reason})`);
            });

            this.client.on('attached', (numAttached) => {
                this.attachedChannels$.next(numAttached);
            });

            this.client.on('detached', (numAttached) => {
                this.attachedChannels$.next(numAttached);
            });

            this.client.on('add-unit', (name: string, user: string, initiative: number) => {
                for (let i = this.units.length - 1; i >= 0; i--) {
                    if (this.units[i].user == user) {
                        this.units.splice(i, 1);
                        this.removedUnits$.next([i, i + 1]);
                    }
                }
                
                this.addUnit({name: name, user: user, initiative: initiative, visible: true});
            });

            this.client.on('get-order', () => {
                this.sendOrder();
            });

            this.client.on('connect', () => {
                console.log(`Connected to socket server with ID ${this.client.id}`);
                this.attachedChannels$.next(0);
            });
        }
    }

    public isDisconnected(): boolean {
        return !this.client;
    }

    public isConnecting(): boolean {
        return !!(this.client && !(this.client.connected && this.client.id));
    }

    public isConnected(): boolean {
        return !!(this.client && this.client.connected && this.client.id);
    }

    public isAttached(): Observable<boolean> {
        return this.attachedChannels$.pipe(map((numChannels) => this.isConnected() && numChannels > 0));
    }

    public numAttachedChannels(): Observable<number> {
        return this.attachedChannels$;
    }

    public addedUnits(): Observable<number> {
        return this.addedUnits$;
    }

    public removedUnits(): Observable<[number, number]> {
        return this.removedUnits$;
    }

    public getId(): string {
        if (this.client && this.client.id)
            return this.client.id.substring(0, 16);
        return undefined;
    }

    public getUnits(): InitiativeGroup[] {
        return this.units;
    }

    public addUnit(unit: InitiativeGroup) {
        let index = this.units.findIndex((u) => u.initiative < unit.initiative);
        if (index == -1) {
            this.addedUnits$.next(this.units.length);
            this.units.push(unit);
        } else {
            this.units.splice(index, 0, unit);
            this.addedUnits$.next(index);
        }
}

    public removeUnit(unit: InitiativeGroup) {
        const index = this.units.indexOf(unit);
        if (index >= 0) {
            this.removedUnits$.next([index, index + 1]);
            this.units.splice(index, 1);
        }
    }

    public clear(): void {
        this.removedUnits$.next([0, this.units.length]);
        this.units.splice(0, this.units.length);
    }

    public sort(): void {
        let randomizedInit = new Map<InitiativeGroup, number>();
        for (let unit of this.units)
            randomizedInit.set(unit, unit.initiative + Math.random());
        this.units.sort((a, b) => randomizedInit.get(b) - randomizedInit.get(a));

        this.sendOrder();
    }

    public requestInitiative() {
        if (this.client)
            this.client.emit('request-initiative');
    }

    public nextUnit(current: InitiativeGroup, next: InitiativeGroup) {
        this.nextUnits$.next([current.visible ? (current.user || current.name) : '???', next.visible ? (next.user || next.name) : '???']);
    }

    public sendOrder() {
        if (this.client) {
            let order: {name: string, initiative: number}[] = [];
            for (let unit of this.units) {
                if (unit.visible)
                    order.push({name: unit.name, initiative: unit.initiative});
            }
            this.client.emit('send-order', order);
        }
    }
}
