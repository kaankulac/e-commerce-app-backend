import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Product, ProductDocument} from './schemas/product.schema';
import {RegisterProductDto} from './dto/register-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async create(registerProductDto: RegisterProductDto): Promise<Product> {
        var abc: string = String(registerProductDto.sales);
        registerProductDto.sales = parseInt(abc)
        const createdProduct = new this.productModel(registerProductDto);
        return createdProduct.save();
    }

    async delete(id: string) {
        var product = this.productModel.findById({_id:id});
        return product.deleteOne();
    }

    

}
