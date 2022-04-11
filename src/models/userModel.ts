import { runMain } from 'module';
import {Schema, model} from 'mongoose';


interface IUser {
    name: string;
    email: string;
    password: string;
    adress?:string;
    paymentMethod?:string;
    grade:number; // 0 user, 1 customer services, 2 super admin
}

const userSchema = new Schema<IUser>({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    adress: String,
    paymentMethod: String,
    grade: {type: Number, required:true}
})

const User = model<IUser>('User', userSchema);

export default User;

