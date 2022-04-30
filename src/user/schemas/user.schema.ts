import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type UserDocument = User & Document;

@Schema({timestamps:true})
export class User {
  
  @Prop({ required: true, unique: true })
  userName: string;

  @Prop({ required: true, unique: true  })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({required: true})
  grade: number;

  @Prop()
  adress: string;

  @Prop([String])
  paymentMethods: string[];

  @Prop([String])
  comments: string[];

  @Prop([{product:{type:Types.ObjectId,require:true,ref:"Product"},quantity:{type:Number,required:true}}])
  shopcart: string[]


}

export const UserSchema = SchemaFactory.createForClass(User);