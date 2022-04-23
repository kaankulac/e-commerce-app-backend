import { Controller, Post, HttpStatus, Get, Body, Request, Param, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { RegisterProductDto } from './dto/register-product.dto';

@Controller('product')
export class ProductController {
    constructor(
        private readonly service: ProductService
    ) { }

    @Post('create')
    async create(@Body() registerProductDto: RegisterProductDto) {

        await this.service.create(registerProductDto);

    }

    @Post('delete')
    async delete(@Body('id') id: string) {
        await this.service.delete(id);
    }


}
