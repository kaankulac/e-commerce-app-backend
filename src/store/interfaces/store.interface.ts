import { Types, Document } from 'mongoose'
import { OwnerDto } from '../dto/owner.dto';

export interface IStore extends Document {
    readonly storeName: string;
    readonly owner: OwnerDto;
    readonly rating: number;
    readonly joinCode: number;
}