import { User } from "src/user/schemas/user.schema";
import { Product } from "src/product/schemas/product.schema";
import { Store } from 'src/store/schemas/store.schema';

export interface IOrder {
    readonly user: User;
    readonly product: Product;
    readonly store: Store;
    readonly amount: number;
    readonly isReturned: Boolean;
    readonly isCancelled: Boolean;
}