import { User } from '../../user/schemas/user.schema';
import { Product } from '../../product/schemas/product.schema';

export interface IOrder {
    readonly user: User;
    readonly product: Product;
    readonly comment: string;
    readonly rate: number;
    readonly createdAt: Date;

}