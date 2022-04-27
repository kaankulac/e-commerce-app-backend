import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProductOrderDto } from './product-order.dto';
import { StoreOrderDto } from './store-order.dto';
import { UserOrderDto } from './user-order';

export class UpdateOrderDto {

    @IsOptional()
    user: UserOrderDto;

    @IsOptional()
    store: StoreOrderDto;

    @IsOptional()
    product: ProductOrderDto;

    @IsOptional()
    amount: number;

    @IsOptional()
    isReturned: Boolean;

    @IsOptional()
    isCancelled: Boolean;


}