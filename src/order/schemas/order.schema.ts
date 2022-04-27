import { Document, Types} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { User } from '../../user/schemas/user.schema';
import { RegisterStoreDto } from 'src/store/dto/register-store.dto';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { RegisterProductDto } from 'src/product/dto/register-product.dto';

export type OrderDocument = Order & Document;


@Schema({timestamps:true})
export class Order {

    @Prop({required:true})
    user: RegisterUserDto;

    @Prop({required:true})
    store: RegisterStoreDto;

    @Prop({required:true})
    product: RegisterProductDto;

    @Prop({required:true})
    amount: number;

    @Prop({required:true})
    isReturned: Boolean;

    @Prop({required:true})
    isCancelled: Boolean;

}

export const OrderSchema = SchemaFactory.createForClass(Order);