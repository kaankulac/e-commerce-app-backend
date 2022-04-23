import { IsNotEmpty, IsString, Length, IsInt} from 'class-validator';
import {Types} from 'mongoose';

export class RegisterStoreDto {
    @IsNotEmpty()
    @IsString()
    storeName: string;

    @IsNotEmpty()
    owner: string;

    rating: number;

    @IsNotEmpty()
    joinCode: number;
}