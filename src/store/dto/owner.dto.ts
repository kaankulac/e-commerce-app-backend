import { IsNotEmpty, IsEmail } from 'class-validator';

export class OwnerDto {
    
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    grade: number;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    surname:string;
    
}