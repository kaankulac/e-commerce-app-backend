import { IsOptional, IsString, IsNumber, Length } from 'class-validator';
import { Store } from 'src/store/schemas/store.schema';

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
    category: string;

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