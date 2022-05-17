import { Types } from 'mongoose';
import { Store } from 'src/store/schemas/store.schema';
import { Category } from 'src/category/schemas/category.schema';
import { ProductInfoDto } from '../dto/product-info.dto';

export interface IProduct {
    readonly productName: string;
    readonly description: string;
    readonly stock: number;
    readonly category: Category;
    readonly productInfo: ProductInfoDto;
    readonly image: string;
    readonly store: Store;
    readonly sales: number;
    readonly rating: number;
    readonly comments: string[];
}

