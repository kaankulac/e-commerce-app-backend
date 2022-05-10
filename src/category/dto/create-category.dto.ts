import { IsNotEmpty } from 'class-validator';


export class CreateCategoryDto{

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    trademark: string;


}