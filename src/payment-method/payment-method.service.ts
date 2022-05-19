import { Injectable } from '@nestjs/common';
import { PaymentMethod, PaymentMethodDocument } from './schemas/payment-method.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentMethodDto } from './dto/create-payment-method.dto';
import { User, UserDocument } from 'src/user/schemas/user.schema';

@Injectable()
export class PaymentMethodService {
    constructor(
        @InjectModel(PaymentMethod.name) private readonly paymentMethodModel: Model<PaymentMethodDocument>,
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) { }

    async create(paymentMethodDto: PaymentMethodDto): Promise<PaymentMethod> {
        const createdPaymentMethod = new this.paymentMethodModel(paymentMethodDto);
        const user = await this.userModel
            .findByIdAndUpdate(paymentMethodDto.user,{$push: {paymentMethod: createdPaymentMethod._id}})

        return createdPaymentMethod.save()
    }

    async delete(id){
        const paymentMethod = await this.paymentMethodModel
            .findByIdAndDelete(id)
        return paymentMethod;
    }

}
