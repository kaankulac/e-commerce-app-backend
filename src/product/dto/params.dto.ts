import { IsOptional } from 'class-validator';

export class ParamsDto {
    
    @IsOptional()
    type: string;

    @IsOptional()
    trademark: string;

    @IsOptional()
    model: string;

    @IsOptional()
    releaseYear: number;

    @IsOptional()
    minPrice: number;

    @IsOptional()
    maxPrice: number;

    @IsOptional()
    store: string;

}