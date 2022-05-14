import { Model } from 'mongoose';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { RegisterProductDto } from './dto/register-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Store, StoreDocument } from '../store/schemas/store.schema';
import { Category, CategoryDocument } from '../category/schemas/category.schema';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ) { }

    async create(registerProductDto: RegisterProductDto): Promise<Product> {
        var abc: string = String(registerProductDto.sales);
        registerProductDto.sales = parseInt(abc)
        const createdProduct = new this.productModel(registerProductDto);
        return createdProduct.save();
    }

    async delete(id: string) {
        var product = await this.productModel
            .findOneAndDelete({ _id: id })
        return product;
    }

    async getProductById(id: string) {
        var product = this.productModel.findById({ _id: id });
        return product;

    }

    async editProduct(editedProduct: UpdateProductDto, productId) {
        const product = await this.productModel
            .findOneAndUpdate({ _id: productId }, editedProduct, { new: true })

        if (!product) {
            throw new NotFoundException();
        }
        return product;
    }


    // never used
    async getProduct(id) {
        const product = await this.productModel
            .findById(id)
        return product;
    }

    async getProductWithStore(id) {
        const product = await this.productModel
            .findById(id)
            .populate('store')
        return product;

    }


  


}
