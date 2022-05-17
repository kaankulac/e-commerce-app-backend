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
    productInfo: {
        trademark: { type: string, required: true },
        model: { type: string, required: false },
        size: { type: string, required: false },
        screenSize: { type: string, required: false },
        ram: { type: string, required: false },
        storage: { type: string, required: false },
        releaseYear: {type:string, required:false}

    }

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