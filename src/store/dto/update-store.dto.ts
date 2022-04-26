import {IsOptional, IsString, Length, IsNotEmpty} from 'class-validator';

export class UpdateStoreDto {
    @IsOptional()
    @IsString()
    storName: string;

    @IsOptional()
    owner: string;
    
    @IsOptional()
    rating: number;

    @IsOptional()
    joinCode: number;

 
}