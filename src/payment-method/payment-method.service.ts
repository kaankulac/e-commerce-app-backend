import { Injectable } from '@nestjs/common';
import { PaymentMethod, PaymentMethodDocument } from './schemas/payment-method.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentMethodDto } from './dto/create-payment-method.dto';

@Injectable()
export class PaymentMethodService {
    constructor(@InjectModel(PaymentMethod.name) private readonly paymentMethodModel: Model<PaymentMethodDocument>) {}

    async create(paymentMethodDto: PaymentMethodDto): Promise<PaymentMethod> {
        const createdPaymentMethod = new this.paymentMethodModel(paymentMethodDto);
        return createdPaymentMethod.save()
    }

}
