import { Controller, Post, HttpStatus, Get, Patch, Body, Request, Param, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { RegisterProductDto } from './dto/register-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(
        private readonly service: ProductService
    ) { }

    @Post('create')
    async create(@Body() registerProductDto: RegisterProductDto) {

        await this.service.create(registerProductDto);

    }

    @Post('delete/:id')
    async delete(@Param('id') id: string) {

        await this.service.delete(id);

    }

    @Patch('edit/:id')
    async editProduct(@Body() editedProduct: UpdateProductDto, @Param('id') id:string ) {

        this.service.editProduct(editedProduct, id);

    }

    


}
