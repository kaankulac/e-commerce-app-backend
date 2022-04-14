import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Product, ProductDocument} from './schemas/product.schema';
import {RegisterProductDto} from './dto/register-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async create(registerProductDto: RegisterProductDto): Promise<Product> {
        const createdProduct = new this.productModel(registerProductDto);
        return createdProduct.save();
    }

    

}
