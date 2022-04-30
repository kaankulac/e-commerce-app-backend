import {IsNotEmpty} from 'class-validator';
import { Product } from 'src/product/schemas/product.schema';

export class ShopcartDto {
    
    @IsNotEmpty()
    product: Product;

    @IsNotEmpty()
    quantity:number
}