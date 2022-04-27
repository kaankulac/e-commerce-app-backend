import { IsNotEmpty } from 'class-validator';

export class ProductOrderDto {

    productName: string;

    price: number;
    
    category: string;
}