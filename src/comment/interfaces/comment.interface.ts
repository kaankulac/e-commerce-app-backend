import { User } from '../../user/schemas/user.schema';
import { Product } from '../../product/schemas/product.schema';

export interface IComment {
    readonly user: string;
    readonly product: string;
    readonly comment: string;
    readonly rate: number;

}