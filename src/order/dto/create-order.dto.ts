import { IsNotEmpty, IsString} from 'class-validator';
import { Store } from '../../store/schemas/store.schema';
import { User } from '../../user/schemas/user.schema';

export class CreateOrderDto {

    @IsNotEmpty()
    userId: User;

    @IsNotEmpty()
    storeId: Store;

    @IsNotEmpty()
    products: string[]

    @IsNotEmpty()
    createdAt: Date;
}