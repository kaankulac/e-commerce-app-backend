import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type PaymentMethodDocument = PaymentMethod & Document;

@Schema({timestamps:true})
export class PaymentMethod {

    @Prop({required:true})
    cardNumber: number;

    @Prop({required:true})
    expirationDate: Date;

    @Prop({required:true})
    cvv: number;

    @Prop({required:true})
    name: string;

    @Prop({required:true, type: Types.ObjectId, ref: "User"})
    user: User

}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);