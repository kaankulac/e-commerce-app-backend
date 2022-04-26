import { IsNotEmpty, IsString } from 'class-validator';

export class ProductOrderDto {
    
    @IsNotEmpty()
    product: string;

    @IsNotEmpty()
    isReturned: Boolean;
}