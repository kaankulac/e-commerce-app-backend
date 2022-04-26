import { Document, Types} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { User } from '../../user/schemas/user.schema';
import { Store } from '../../store/schemas/store.schema';
import { ProductOrderDto } from '../dto/product.dto';

export type OrderDocument = Order & Document;


@Schema({timestamps:true})
export class Order {

    @Prop({required:true})
    userId: string;

    @Prop({required:true})
    storeId: string;

    @Prop({required:true})
    products: ProductOrderDto[]

}

export const OrderSchema = SchemaFactory.createForClass(Order);