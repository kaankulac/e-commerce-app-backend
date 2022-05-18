import { IsString, Length, IsNotEmpty } from 'class-validator';
import { User } from '../../user/schemas/user.schema';
import { Product } from '../../product/schemas/product.schema';

export class CreateCommentDto {
    @IsNotEmpty()
    user: User;

    @IsNotEmpty()
    product: Product;

    @IsNotEmpty()
    @IsString()
    @Length(10,50)
    comment: string;

    @IsNotEmpty()
    rate: number; // 1-10


}
