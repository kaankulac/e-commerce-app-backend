import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {Config} from './app.config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './user/user.module'; 
import { ProductModule } from './product/product.module';
import { StoreModule } from './store/store.module';
import { CommentModule } from './comment/comment.module';
import { OrderModule } from './order/order.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';

@Module({
  imports: [
    MongooseModule.forRoot(Config.mongoDbConnectionString),
    UserModule,
    ProductModule,
    StoreModule,
    CommentModule,
    OrderModule,
    PaymentMethodModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
