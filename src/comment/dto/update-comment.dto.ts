import { IsOptional, IsString, Length} from 'class-validator';
import { Product } from 'src/product/schemas/product.schema';
import { User } from 'src/user/schemas/user.schema';

export class UpdateCommentDto {
    @IsOptional()
    user: User;

    @IsOptional()
    product: Product;

    @IsOptional()
    @IsString()
    @Length(10,50)
    comment: string;

    @IsOptional()
    rate: number;

}