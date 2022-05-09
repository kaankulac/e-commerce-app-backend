import { IsEmail, IsOptional } from 'class-validator';


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
    paymentMethods: string[];

    @IsOptional()
    comments: string[];

    @IsOptional()
    shopcart: string[];

}