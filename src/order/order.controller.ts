import { Controller, Post, Get, Delete, Patch, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
    constructor(
        private readonly service: OrderService,
    ) {}

    @Post('create')
    async create(@Body() createOrderDto: CreateOrderDto){
        const order = this.service.create(createOrderDto);
    }
}
