import {IsOptional, IsString, Length, IsNotEmpty} from 'class-validator';
import { OwnerDto } from './owner.dto';

export class UpdateStoreDto {
    @IsOptional()
    @IsString()
    storName: string;

    @IsOptional()
    owner: OwnerDto;
    
    @IsOptional()
    rating: number;

    @IsOptional()
    joinCode: number;

 
}