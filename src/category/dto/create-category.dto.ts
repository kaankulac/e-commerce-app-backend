import { IsNotEmpty } from 'class-validator';


export class CreateCategoryDto{

    @IsNotEmpty()
    type: string;

    
}