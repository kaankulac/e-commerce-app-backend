import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProductOrderDto } from './product.dto';

export class UpdateOrderDto {

    @IsOptional()
    userId: string;

    @IsOptional()
    storeId: string;

    @IsOptional()
    products: ProductOrderDto[];


}