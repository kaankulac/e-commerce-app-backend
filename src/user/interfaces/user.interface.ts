import { Document } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export interface IUser extends Document {
    readonly userName: string;
    readonly email: string;
    readonly password: string;
    readonly name: string;
    readonly surname: string;
    readonly grade: number;
    readonly adress: string;
    readonly paymentMethods: string[];
    readonly comments: string[];
    readonly shopcart: string[];

}