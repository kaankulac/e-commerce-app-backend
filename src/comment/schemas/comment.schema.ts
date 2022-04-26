import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { User } from '../../user/schemas/user.schema';
import { Product } from '../../product/schemas/product.schema';


export type CommentDocument = Comment & Document;

@Schema({timestamps:true})
export class Comment {

    @Prop({required:true})
    user: string;

    @Prop({required:true})
    product: string;

    @Prop({required:true})
    comment: string;

    @Prop({required:true})
    rate: number;
     
    @Prop({required:true})
    createdAt:Date

    @Prop({required:true})
    updatedAt:Date


}

export const CommentSchema = SchemaFactory.createForClass(Comment); 