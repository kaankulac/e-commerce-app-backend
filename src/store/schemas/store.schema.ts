import { Document, Types } from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {User} from '../../user/schemas/user.schema';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
    @Prop({required: true, unique:true})
    storeName: string;

    @Prop({required: true, unique:true, type: Types.ObjectId, ref:"User" })
    owner: User;

    @Prop({required:true, unique:true})
    joinCode: string;

    @Prop()
    rating: number;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
