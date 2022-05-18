import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { User } from '../../user/schemas/user.schema';
import { Product } from '../../product/schemas/product.schema';


export type CommentDocument = Comment & Document;

@Schema({timestamps:true})
export class Comment {

    @Prop({required:true, type: Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({required:true ,type: Types.ObjectId, ref: 'Product'})
    product: Product;

    @Prop({required:true})
    comment: string;

    @Prop({required:true})
    rate: number;
     

}

export const CommentSchema = SchemaFactory.createForClass(Comment); 