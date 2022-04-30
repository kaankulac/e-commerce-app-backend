import { Document, Types } from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { OwnerDto } from '../dto/owner.dto';

export type StoreDocument = Store & Document;

@Schema({timestamps:true})
export class Store {
    @Prop({required: true, unique:true})
    storeName: string;

    @Prop({required: true, unique:true})
    owner: OwnerDto;

    @Prop({required:true, unique:true})
    joinCode: number;

    @Prop()
    rating: number;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
