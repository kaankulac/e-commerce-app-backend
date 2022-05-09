import { Document, Types} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { User } from '../../user/schemas/user.schema';
import { Product } from 'src/product/schemas/product.schema';

export type OrderDocument = Order & Document;


@Schema({timestamps:true})
export class Order {

    @Prop({required:true, type:Types.ObjectId, ref:'User'})
    user: User;

    @Prop({required:true, type:Types.ObjectId, ref:'Product'})
    product: Product;

    @Prop({required:true})
    amount: number;

    @Prop({required:true})
    isReturned: Boolean;

    @Prop({required:true})
    isCancelled: Boolean;


}

export const OrderSchema = SchemaFactory.createForClass(Order);