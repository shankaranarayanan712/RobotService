import { Identifier } from 'typescript';

export interface robot {
    id: Identifier;
    coordinates: Array<any>;
    createdAt: Date;
}

export interface log {
    operationTime: string;
    direction: string;
    previousPosition: string;
    currentPosition: string;
}
