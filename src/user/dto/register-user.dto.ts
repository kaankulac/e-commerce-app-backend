import {IsNotEmpty, IsString, IsEmail, IsCreditCard} from 'class-validator';
import { Product } from 'src/product/schemas/product.schema';


export class RegisterUserDto {
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    surname:string;

    @IsNotEmpty()
    grade: number;

    @IsString()
    adress: string;

    paymentMethods:string[];

    comments:string[];

    shopcart:string[];

    

}