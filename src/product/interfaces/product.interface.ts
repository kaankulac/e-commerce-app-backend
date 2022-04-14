import { Types } from 'mongoose';

export interface IProduct {
    readonly productName: string;
    readonly description: string;
    readonly stock: number;
    readonly category: string;
    readonly image: string;
    readonly storeId: Types.ObjectId;
    readonly sales: number;
    readonly rating: number;
    readonly comments: string[];
}

