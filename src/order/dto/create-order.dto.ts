import { IsNotEmpty, IsString} from 'class-validator';
import { Store } from '../../store/schemas/store.schema';
import { User } from '../../user/schemas/user.schema';
import { ProductOrderDto } from './product.dto';

export class CreateOrderDto {

    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    storeId: string;

    @IsNotEmpty()
    products: ProductOrderDto[]

}