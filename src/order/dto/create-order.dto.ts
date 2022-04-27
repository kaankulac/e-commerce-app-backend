import { IsNotEmpty, IsString} from 'class-validator';
import { ProductOrderDto } from './product-order.dto';
import { StoreOrderDto } from './store-order.dto';
import { UserOrderDto } from './user-order';

export class CreateOrderDto {

    @IsNotEmpty()
    user: UserOrderDto;

    @IsNotEmpty()
    store: StoreOrderDto;

    @IsNotEmpty()
    product: ProductOrderDto;

    @IsNotEmpty()
    amount: string;
 
    @IsNotEmpty()
    isReturned: Boolean;

    @IsNotEmpty()
    isCancelled: Boolean;


}