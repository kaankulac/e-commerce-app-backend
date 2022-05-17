import { IsOptional, IsString, IsNumber, Length } from 'class-validator';
import { Store } from 'src/store/schemas/store.schema';
import { Category } from "src/category/schemas/category.schema";
import { ProductInfoDto } from './product-info.dto';

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    productName: string;

    @IsOptional()
    @IsString()
    @Length(10, 120)
    description: string;

    @IsOptional()
    stock: number;

    @IsOptional()
    category: Category;

    @IsOptional()
    productInfo: ProductInfoDto

    @IsOptional()
    image: string;

    @IsOptional()
    store: Store;

    @IsOptional()
    sales: number;

    @IsOptional()
    rating: number

    @IsOptional()
    comments: string[];
}