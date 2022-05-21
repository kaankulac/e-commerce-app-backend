import {IsOptional} from 'class-validator';


export class UpdateCategoryDto {

    @IsOptional()
    type: string;

    @IsOptional()
    subType: string;

}