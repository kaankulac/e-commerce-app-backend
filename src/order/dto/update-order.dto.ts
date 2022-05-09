import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/user/schemas/user.schema';
import { Product } from 'src/product/schemas/product.schema';
import { Store } from 'src/store/schemas/store.schema';

export class UpdateOrderDto {

    @IsOptional()
    user: User;

    @IsOptional()
    product: Product;

    @IsOptional()
    store: Store;

    @IsOptional()
    amount: number;

    @IsOptional()
    isReturned: Boolean;

    @IsOptional()
    isCancelled: Boolean;


}