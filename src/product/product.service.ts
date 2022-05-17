import { Model } from 'mongoose';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { RegisterProductDto } from './dto/register-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Store, StoreDocument } from '../store/schemas/store.schema';
import { Category, CategoryDocument } from '../category/schemas/category.schema';
import { ProductFilterDto } from './dto/product.filter.dto';

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

    async getProductWithStore(id: string) {

        try {

            const product = await this.productModel
                .findById({_id:id})
                .populate('store')
            return product;

        }catch(err){
            return err;
        }

    }

    async getProductWithFilter(productFilterDto: ProductFilterDto) {

        try {
            const products = await this.productModel
                .find({
                    category: productFilterDto.category ? productFilterDto.category : { $ne: null },
                    price: { $gt: productFilterDto.minPrice || 0, $lt: productFilterDto.maxPrice || 999999999 },
                    rating: { $gt: productFilterDto.rating || -1 },
                    'productInfo.trademark': productFilterDto.trademark ? productFilterDto.trademark : { $ne: null },
                    'productInfo.model': productFilterDto.model ? productFilterDto.model : { $ne: 'null' },
                    'productInfo.size': productFilterDto.size ? productFilterDto.size : { $ne: 'null' },
                    'productInfo.gender': productFilterDto.gender ? productFilterDto.gender : { $ne: 'null' },
                    'productInfo.screenSize': productFilterDto.screenSize ? productFilterDto.screenSize : { $ne: 'null' },
                    'productInfo.ram': productFilterDto.ram ? productFilterDto.ram : { $ne: 'null' },
                    'productInfo.storage': productFilterDto.storage ? productFilterDto.storage : { $ne: 'null' }
                })
                .populate('store')

            return products;

        } catch (err) {

            return err;

        }

    }





}
