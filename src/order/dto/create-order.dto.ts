import { IsNotEmpty, IsString} from 'class-validator';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { RegisterStoreDto } from 'src/store/dto/register-store.dto';
import { RegisterProductDto } from 'src/product/dto/register-product.dto';

export class CreateOrderDto {

    @IsNotEmpty()
    user: RegisterUserDto;

    @IsNotEmpty()
    store: RegisterStoreDto;

    @IsNotEmpty()
    product: RegisterProductDto;

    @IsNotEmpty()
    amount: string;
 
    @IsNotEmpty()
    isReturned: Boolean;

    @IsNotEmpty()
    isCancelled: Boolean;


}