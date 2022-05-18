import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { IUser } from './interfaces/user.interface';
import { IJwtPayload } from './interfaces/jwt-payload.interface';
import { User, UserDocument } from './schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';
import { PasswordHelper } from '../common/helpers/password.helper';
import { Product } from 'src/product/schemas/product.schema';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        private jwtService: JwtService,
        private passwordHelper: PasswordHelper
    ) { }

    async login(user: IUser) {
        try {
            const payload: IJwtPayload = { userName: user.userName, userId: user.id };
            return { access_token: this.jwtService.sign(payload) };
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        try {
            const create = new this.userModel(registerUserDto);
            return create.save();
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async validateUser(userName: string, pass: string): Promise<User | null> {
        try {
            let findUser: User | null = null;
            const find = await this.userModel.find({ userName }).select('+password').exec();
            findUser = find.length > 0 ? find[0] : null;

            if (findUser != null) {
                const check = await this.passwordHelper.verifyPasswordHash(pass, findUser.password);
                return check ? findUser : null;
            }
            return findUser;
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async registerFindUser(userName: string, email: string): Promise<boolean> {
        try {
            const user = await this.userModel.find({ $or: [{ userName }, { email }] }).exec();
            return user.length > 0 ? true : false;
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findUserById(id: string): Promise<User> {
        try {
            const find = await this.userModel.findById(id).exec();
            return find;
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async addItemToShopcart(id: string, productID: Product) {
        try {
            const user = await this.userModel
                .findById(id)
            for (let i = 0; i < user.shopcart.length; i++) {
                if (user.shopcart[i].product == productID) {
                    user.shopcart[i].quantity += 1;
                    await user.save()
                    return user;
                    break;
                } else {

                    if (i == user.shopcart.length - 1) {
                        const user = await this.userModel
                            .findOneAndUpdate({ _id: id }, { $push: { shopcart: { product: productID, quantity: 1 } } })
                        return user;
                    }

                }
            }
        }
        catch (err) {
            return err
        }
    }

    async increaseItemToShopcart(id: string, productID: Product) {
        const user = await this.userModel
            .findById(id)
        for (let i = 0; i < user.shopcart.length; i++) {
            if (user.shopcart[i].product == productID) {
                if (user.shopcart[i].quantity == 1) {
                    user.shopcart.splice(i, 1);
                    await user.save();
                    return user;
                } else {
                    user.shopcart[i].quantity -= 1;
                    await user.save();
                    return user;
                }

            }
        }

    }

    async deleteItemToShopcartItem(id: string, productID: Product) {
        const user = await this.userModel
            .findById(id)
        for (let i = 0; i < user.shopcart.length; i++) {
            if (user.shopcart[i].product == productID) {
                user.shopcart.splice(i, 1);
                user.save();
                break;
            }
        }

    }

    async getUserWithShopcart(id: string) {
        try {
            const user = await this.userModel
                .findById(id)
                .populate('shopcart.product')
                .populate({
                    path: "shopcart.product",
                    populate: {
                        path: "store",
                        model: "Store"
                    }
                })
                .populate('comments')
                .populate({
                    path:'comments',
                    populate: {
                        path:'product',
                        model: 'Product'
                    }
                })
                .populate({                          // not working will try
                    path:'comments.product',
                    populate: {
                        path: 'store',
                        model : 'Store'
                    }
                })
            return user;
        }
        catch (err) {
            return err
        }
    }

    async deleteUser(id: string) {
        try {
            const user = await this.userModel
                .findByIdAndDelete(id)
            throw new HttpException('Deleted',HttpStatus.OK);
        }catch(err){
            throw new HttpException(err.message,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async editUser(editedUser: updateUserDto, userId: string){
        try {
            
            const user = await this.userModel
                .findByIdAndUpdate({_id:userId},editedUser,{new:true})
            return user;
        }catch(err){
            return err;
        }

    }

}