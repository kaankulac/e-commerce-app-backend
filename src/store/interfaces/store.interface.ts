import { Types } from 'mongoose'

export interface IStore {
    readonly storeName: string;
    readonly owner: Types.ObjectId;
    readonly rating: number;
    readonly joinCode: number;
}