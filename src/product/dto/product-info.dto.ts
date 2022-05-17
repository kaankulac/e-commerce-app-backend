import { IsNotEmpty, IsOptional } from "class-validator";

export class ProductInfoDto {

    @IsNotEmpty()
    trademark: string;

    @IsOptional()
    releaseYear: string;

    @IsOptional()
    model: string;

    @IsOptional()
    size: string;

    @IsOptional()
    gender: string;

    @IsOptional()
    ram: string;

    @IsOptional()
    screenSize: string;

    @IsOptional()
    storage: string;

}