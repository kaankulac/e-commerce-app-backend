import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PaymentMethodDto } from './dto/create-payment-method.dto';
import { PaymentMethodService } from './payment-method.service';
@Controller('payment-method')
export class PaymentMethodController {

    constructor (
        private readonly service: PaymentMethodService
    ) {}

    @Post('create')
    async create(@Body() createPaymentMethod: PaymentMethodDto){

        const pMethod = await this.service.create(createPaymentMethod)
        return pMethod;

    }

    @Delete('delete/:id')
    async delete(@Param('id') id:string){

        const pMethod = this.service.delete(id)
        return pMethod;
        
    }
    
}
