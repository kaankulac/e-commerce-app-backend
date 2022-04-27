import { RegisterProductDto } from 'src/product/dto/register-product.dto';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { RegisterStoreDto } from 'src/store/dto/register-store.dto';

export interface IOrder {
    readonly user: RegisterUserDto;
    readonly store: RegisterStoreDto;
    readonly product: RegisterProductDto;
    readonly amount: number;
    readonly isReturned: Boolean;
    readonly isCancelled: Boolean;
}