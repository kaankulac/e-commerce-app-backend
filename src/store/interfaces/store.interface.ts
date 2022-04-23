import { Types, Document } from 'mongoose'

export interface IStore extends Document {
    readonly storeName: string;
    readonly owner: string;
    readonly rating: number;
    readonly joinCode: number;
}