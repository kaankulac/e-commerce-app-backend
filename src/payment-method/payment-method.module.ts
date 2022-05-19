import { Module } from '@nestjs/common';
import { PaymentMethod, PaymentMethodSchema } from './schemas/payment-method.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentMethodController } from './payment-method.controller';
import { PaymentMethodService } from './payment-method.service';
import { UserSchema, User } from 'src/user/schemas/user.schema';

@Module({
    controllers:[PaymentMethodController],
    providers:[PaymentMethodService],
    imports:[MongooseModule.forFeature([{name: PaymentMethod.name, schema: PaymentMethodSchema}, {name: User.name, schema: UserSchema}])],
})
export class PaymentMethodModule {}
