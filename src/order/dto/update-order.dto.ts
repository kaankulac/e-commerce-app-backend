import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { RegisterStoreDto } from 'src/store/dto/register-store.dto';
import { RegisterProductDto } from 'src/product/dto/register-product.dto';

export class UpdateOrderDto {

    @IsOptional()
    user: RegisterUserDto;

    @IsOptional()
    store: RegisterStoreDto;

    @IsOptional()
    product: RegisterProductDto;

    @IsOptional()
    amount: number;

    @IsOptional()
    isReturned: Boolean;

    @IsOptional()
    isCancelled: Boolean;


}