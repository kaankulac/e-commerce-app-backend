import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order, OrderSchema } from './schemas/order.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
  imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])]
})
export class OrderModule {}
