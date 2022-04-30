import { Types } from 'mongoose';
import { Store } from 'src/store/schemas/store.schema';

export interface IProduct {
    readonly productName: string;
    readonly description: string;
    readonly stock: number;
    readonly category: string;
    readonly image: string;
    readonly store: Store;
    readonly sales: number;
    readonly rating: number;
    readonly comments: string[];
}

