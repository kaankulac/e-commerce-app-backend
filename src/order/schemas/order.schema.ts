import { Document, Types} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { User } from '../../user/schemas/user.schema';
import { Store } from '../../store/schemas/store.schema';

export type OrderDocument = Order & Document;


@Schema()
export class Order {

    @Prop({required:true})
    user: User;

    @Prop({required:true})
    store: Store;

    @Prop({required:true})
    products: string[]

    @Prop({required:true})
    createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);