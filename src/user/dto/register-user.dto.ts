import {IsNotEmpty, IsString, IsEmail, IsCreditCard} from 'class-validator';
import { Product } from 'src/product/schemas/product.schema';
import { PaymentMethod } from 'src/payment-method/schemas/payment-method.schema';

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

    @IsNotEmpty()
    emailVerified: Boolean;


    adress: string;

    paymentMethods:PaymentMethod[];

    comments:string[];

    shopcart:string[];

    

}