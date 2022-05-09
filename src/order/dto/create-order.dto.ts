import { IsNotEmpty, IsString} from 'class-validator';
import { User } from 'src/user/schemas/user.schema';
import { Product } from 'src/product/schemas/product.schema';
import { Store } from 'src/store/schemas/store.schema';

export class CreateOrderDto {

    @IsNotEmpty()
    user: User;

    @IsNotEmpty()
    product: Product;

    @IsNotEmpty()
    store: Store;
    
    @IsNotEmpty()
    amount: string;
 
    @IsNotEmpty()
    isReturned: Boolean;

    @IsNotEmpty()
    isCancelled: Boolean;


}