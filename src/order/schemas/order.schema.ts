import { Document, Types} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { User } from '../../user/schemas/user.schema';
import { UserOrderDto } from '../dto/user-order';
import { StoreOrderDto } from '../dto/store-order.dto';
import { ProductOrderDto } from '../dto/product-order.dto';

export type OrderDocument = Order & Document;


@Schema({timestamps:true})
export class Order {

    @Prop({required:true,unique:false})
    user: UserOrderDto;

    @Prop({required:true})
    store: StoreOrderDto;

    @Prop({required:true})
    product: ProductOrderDto;

    @Prop({required:true})
    amount: number;

    @Prop({required:true})
    isReturned: Boolean;

    @Prop({required:true})
    isCancelled: Boolean;

}

export const OrderSchema = SchemaFactory.createForClass(Order);