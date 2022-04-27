import { UserOrderDto } from "../dto/user-order";
import { StoreOrderDto } from "../dto/store-order.dto";
import { ProductOrderDto } from "../dto/product-order.dto";

export interface IOrder {
    readonly user: UserOrderDto;
    readonly store: StoreOrderDto;
    readonly product: ProductOrderDto;
    readonly amount: number;
    readonly isReturned: Boolean;
    readonly isCancelled: Boolean;
}