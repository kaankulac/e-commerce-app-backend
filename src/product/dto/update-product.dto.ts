import { IsOptional, IsString, IsNumber, Length } from 'class-validator';
import { Store } from 'src/store/schemas/store.schema';
import { Category } from "src/category/schemas/category.schema";

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    productName: string;

    @IsOptional()
    @IsString()
    @Length(10,120)
    description: string;

    @IsOptional()
    stock: number;

    @IsOptional()
    category: Category;

    @IsOptional()
    trademark: string;

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