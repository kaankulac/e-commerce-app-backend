import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/user/schemas/user.schema';
import { Store } from 'src/store/schemas/store.schema';
import { Product } from 'src/product/schemas/product.schema';

export class UpdateOrderDto {

    @IsOptional()
    user: User;

    @IsOptional()
    product: Product;

    @IsOptional()
    amount: number;

    @IsOptional()
    isReturned: Boolean;

    @IsOptional()
    isCancelled: Boolean;


}