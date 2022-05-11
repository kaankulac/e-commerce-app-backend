import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type CategoryDocument = Category & Document;


@Schema({timestamps:true})
export class Category {

    @Prop({required:true})
    type: string;

    @Prop({required:true})
    trademark: string;

    @Prop({required:true})
    model: string;

    @Prop({required:true})
    releaseYear: number;

}

export const CategorySchema = SchemaFactory.createForClass(Category);