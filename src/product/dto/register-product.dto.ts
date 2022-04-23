import { IsNotEmpty, IsString, Length, IsInt } from "class-validator";
import {Types} from 'mongoose';

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
    stock: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    store: Types.ObjectId;

    @IsInt()
    sales: number;

    @IsInt()
    rating: string; // 1-10

    comments: string[];

}