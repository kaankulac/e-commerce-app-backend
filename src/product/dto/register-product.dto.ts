import { IsNotEmpty, IsString, Length, IsInt } from "class-validator";
import { Types } from 'mongoose';
import { Store } from '../../store/schemas/store.schema';
import { Category } from "src/category/schemas/category.schema";
import { ProductInfoDto } from "./product-info.dto";

export class RegisterProductDto {
    @IsNotEmpty()
    @IsString()
    productName: string;

    @IsNotEmpty()
    @IsString()
    @Length(10, 120)
    description: string;

    @IsNotEmpty()
    @IsInt()
    stock: number;

    @IsNotEmpty()
    @IsString()
    category: Category;

    @IsNotEmpty()
    productInfo: {
        trademark: { type: string, required: true },
        model: { type: string, required: false },
        size: { type: string, required: false },
        screenSize: { type: string, required: false },
        ram: { type: string, required: false },
        storage: { type: string, required: false },
        releaseYear: {type:string, required:false}

    }

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    store: Store;

    @IsInt()
    sales: number;

    @IsInt()
    rating: number; // 1-10

    comments: string[];

}