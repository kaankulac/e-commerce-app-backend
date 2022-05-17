import { Document, Types } from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Store} from '../../store/schemas/store.schema';
import { Category } from 'src/category/schemas/category.schema';
import { ProductInfoDto } from '../dto/product-info.dto';
import { KeyObject } from 'crypto';


export type ProductDocument = Product & Document;

@Schema({timestamps:true})
export class Product {

    @Prop({required: true})
    productName: string;

    @Prop({required: true})
    description: string;

    @Prop({required:true})
    stock: number;

    @Prop({required:true, type: Types.ObjectId, ref:'Category'})
    category: Category;

    @Prop({required:true, type:Object})
    productInfo: ProductInfoDto
    
    @Prop({required:true})
    image:string;

    @Prop({required:true, type: Types.ObjectId, ref:'Store'})
    store: Store;

    @Prop()
    sales: number;

    @Prop()
    rating: number;

    @Prop([String])
    comments: string[]


}

export const ProductSchema = SchemaFactory.createForClass(Product);