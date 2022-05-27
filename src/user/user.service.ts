import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
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
import nodemailer from 'nodemailer';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        private jwtService: JwtService,
        private passwordHelper: PasswordHelper
    ) { }

    async login(user: IUser) {

        try {
            const user3 = await this.userModel
                .find({ userName: user.userName })

            if (true) {
                const payload: IJwtPayload = { userName: user.userName, userId: user.id };
                return this.jwtService.sign(payload);
            } else {
                throw new HttpException('Email not verified', HttpStatus.BAD_REQUEST)
            }

        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        const username = "denemeonaylama@gmail.com";
        const password = "234234234k";
        const hostname = "gmail";
        try {

            const create = new this.userModel(registerUserDto);
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })
            const user = await create.save();
            let verifyMessage = await transporter.sendMail({
                from: username,
                to: registerUserDto.email,
                subject: "Email verification link",
                html: '<p>Click <a href="http://localhost:4000/api/user/verify/' + user._id + '">here</a> to verify your email</p>'

            }, function (err, info) {
                if (err) throw err;
                return user
            })
            return user
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async validateUser(userName: string, pass: string): Promise<any> {
        try {
            const user = await this.userModel
                .find({ userName: userName })
            if (!user) throw new UnauthorizedException()
            return user
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
            console.log(id)
            console.log(productID)
            const user = await this.userModel
                .findById({_id:id})
            console.log(user);
            
            if (user.shopcart.length == 0) {
                console.log("--")
                const user = await this.userModel
                    .findOneAndUpdate({ _id: id }, { $push: { shopcart: { product: productID, quantity: 1 } } })
                return user;
            }
            for (let i = 0; i < user.shopcart.length; i++) {
                if (user.shopcart[i].product == productID) {
                    console.log("++")
                    user.shopcart[i].quantity += 1;
                    await user.save()
                    return user;
                } else {

                    if (i == user.shopcart.length - 1) {
                        console.log("++")

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

    async decreaseItemToShopcart(id: string, productID: Product) {
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
                    path: 'comments',
                    populate: {
                        path: 'product',
                        model: 'Product'
                    }
                })
                .populate({                         
                    path: 'comments.product',
                    populate: {
                        path: 'store',
                        model: 'Store'
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
            throw new HttpException('Deleted', HttpStatus.OK);
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async editUser(editedUser: updateUserDto, userId: string) {
        try {

            const user = await this.userModel
                .findByIdAndUpdate({ _id: userId }, editedUser, { new: true })
            return user;
        } catch (err) {
            return err;
        }

    }

    async deneme(user: updateUserDto) {
        return user;
    }

    async getAllUsers() {

        const users = await this.userModel
            .find()

        return users;
    }

    async getUserByUsername(username) {
        const user = await this.userModel
            .findById("628ff015cbec7b7d76236cd8")
            .select("-shopcart._id")
            .populate('shopcart.product')
        
        
            
        return user.shopcart;
    }

    async verifyEmail(id: string) {
        try {
            const user = await this.userModel
                .findByIdAndUpdate(id, { emailVerified: true });
            return "Email verified !";
        } catch (err) {
            return err
        }

    }

}