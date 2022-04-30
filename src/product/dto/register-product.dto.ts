import { IsNotEmpty, IsString, Length, IsInt } from "class-validator";
import {Types} from 'mongoose';
import { Store } from '../../store/schemas/store.schema';

export class RegisterProductDto {
    @IsNotEmpty()
    @IsString()
    productName: string;

    @IsNotEmpty()
    @IsString()
    @Length(10,120)
    description: string;

    @IsNotEmpty()
    @IsInt()
    stock: number;

    @IsNotEmpty()
    @IsString()
    category: string;

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