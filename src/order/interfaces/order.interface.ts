import { User } from "src/user/schemas/user.schema";
import { Product } from "src/product/schemas/product.schema";

export interface IOrder {
    readonly user: User;
    readonly product: Product;
    readonly amount: number;
    readonly isReturned: Boolean;
    readonly isCancelled: Boolean;
}