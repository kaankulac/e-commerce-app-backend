import { Types, Document } from 'mongoose'
import { User } from 'src/user/schemas/user.schema';

export interface IStore extends Document {
    readonly storeName: string;
    readonly owner: User;
    readonly rating: number;
    readonly joinCode: number;
}