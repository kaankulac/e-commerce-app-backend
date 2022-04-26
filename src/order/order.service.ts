import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>) {}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const createdOrder = new this.orderModel(createOrderDto);
        return createdOrder.save();
    }

    async delete(id) {
        try {
            const order = await this.orderModel
                .findOneAndDelete(id);
            return order
        } catch(err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async cancel() {

    }

    async return() {

    }

    async edit() {
        
    }
}
