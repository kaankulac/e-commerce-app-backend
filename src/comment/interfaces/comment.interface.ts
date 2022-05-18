import { User } from '../../user/schemas/user.schema';
import { Product } from '../../product/schemas/product.schema';

export interface IComment {
    readonly user: User;
    readonly product: Product;
    readonly comment: string;
    readonly rate: number;

}