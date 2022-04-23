import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type PaymentMethodDocument = PaymentMethod & Document;

@Schema()
export class PaymentMethod {

    @Prop({required:true})
    cardNumber: number;

    @Prop({required:true})
    expirationDate: Date;

    @Prop({required:true})
    cvv: number;

    @Prop({required:true})
    name: string;

    @Prop({required:true})
    user: User

}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);