import { IsOptional } from "class-validator";

export class ParamsDto {

    @IsOptional()
    type: string;

    @IsOptional()
    trademark: string;

    @IsOptional()
    model: string;

    @IsOptional()
    releaseYear: number;
}