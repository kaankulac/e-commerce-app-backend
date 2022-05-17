import { IsOptional } from 'class-validator';

export class ProductFilterDto {

    @IsOptional()
    category: string;

    @IsOptional()
    trademark: string;

    @IsOptional()
    minPrice: number;

    @IsOptional()
    maxPrice: number;

    @IsOptional()
    model: string;

    @IsOptional()
    releaseYear: string;

    @IsOptional()
    size: string;

    @IsOptional()
    gender: string;

    @IsOptional()
    screenSize: string;

    @IsOptional()
    ram: string;

    @IsOptional()
    storage: string;

    @IsOptional()
    rating: number;

}