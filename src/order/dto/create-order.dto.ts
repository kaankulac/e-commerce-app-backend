import { IsNotEmpty, IsString} from 'class-validator';

import { User } from 'src/user/schemas/user.schema';
import { Store } from 'src/store/schemas/store.schema';
import { Product } from 'src/product/schemas/product.schema';

export class CreateOrderDto {

    @IsNotEmpty()
    user: User;
    
    @IsNotEmpty()
    product: Product;

    @IsNotEmpty()
    amount: string;
 
    @IsNotEmpty()
    isReturned: Boolean;

    @IsNotEmpty()
    isCancelled: Boolean;


}