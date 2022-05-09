import { Controller, Post, Get, Delete, Patch, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from 'src/user/schemas/user.schema';

@Controller('order')
export class OrderController {
    constructor(
        private readonly service: OrderService,
    ) {}

    @Post('create')
    async create(@Body() createOrderDto: CreateOrderDto){
        const order = this.service.create(createOrderDto);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id:string) {
        const order = this.service.delete(id);
    }

    @Get('get/:userId')
    async getUserOrders(@Param('userId') id:User){
        const orders = this.service.getUserOrders(id);
        return orders;
    }

    
}
