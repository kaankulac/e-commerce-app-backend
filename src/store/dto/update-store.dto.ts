import {IsOptional, IsString, Length, IsNotEmpty} from 'class-validator';
import { User } from 'src/user/schemas/user.schema';

export class UpdateStoreDto {
    @IsOptional()
    @IsString()
    storName: string;

    @IsOptional()
    owner: User;
    
    @IsOptional()
    rating: number;

    @IsOptional()
    joinCode: number;

 
}