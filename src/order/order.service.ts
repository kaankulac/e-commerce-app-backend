import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User, UserSchema } from 'src/user/schemas/user.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>) { }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const createdOrder = new this.orderModel(createOrderDto);
        return createdOrder.save();
    }

    async delete(id:string) {
        try {
            const order = await this.orderModel
                .findByIdAndDelete(id);
            return order
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async cancel(id:string) {
        try {
            const order = await this.orderModel
                .findByIdAndUpdate({ _id: id }, { isCancelled: true }, { new: true });

            return order;
        } catch (err) {
            return err
        }
    }

    async return(id:string) {
        try {
            const order = await this.orderModel
                .findByIdAndUpdate({ _id: id }, { isReturned: true }, { new: true });

            return order;
        } catch (err) {
            return err
        }
    }

    async edit(id:string, editedOrder:UpdateOrderDto) {
        try {
            const order = await this.orderModel
                .findByIdAndUpdate({ _id: id }, editedOrder, { new: true });

            return order;
        } catch (err) {
            return err
        }
    }

    async getUserOrders(id:User){
        try {
            const orders = await this.orderModel
                .find({user:id})
                .populate('user')
                .populate('product')
                .populate({
                    path:"product",
                    populate: {
                        path:"store",
                        model:"Store"
                    }
                })
            return orders;

        }catch(err){
            return err;
        }
    }
}
