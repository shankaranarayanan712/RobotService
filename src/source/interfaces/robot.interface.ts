import { Identifier } from 'typescript';

export interface robot {
    id: Identifier;
    coordinates: Array<any>;
    createdAt: Date;
}
