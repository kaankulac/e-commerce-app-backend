import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserOrderDto {
    
    @IsNotEmpty()
    userName:string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    name: string;

    surname: string;
}