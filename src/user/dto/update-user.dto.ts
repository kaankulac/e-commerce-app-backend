import { IsEmail, IsOptional } from 'class-validator';
import { PaymentMethod } from 'src/payment-method/schemas/payment-method.schema';

export class updateUserDto {
    @IsOptional()
    userName: string;

    @IsOptional()
    @IsEmail()
    email: string

    @IsOptional()
    password: string;

    @IsOptional()
    name: string;

    @IsOptional()
    surname: string;

    @IsOptional()
    grade: number;

    @IsOptional()
    adress: string;

    @IsOptional()
    paymentMethods: PaymentMethod[];

    @IsOptional()
    comments: string[];

    @IsOptional()
    shopcart: string[];

}