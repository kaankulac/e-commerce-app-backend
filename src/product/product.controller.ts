import { Controller, Post, HttpStatus, Get, Patch, Body, Request, Param, Delete, HttpException } from '@nestjs/common';
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

    @Delete('delete/:id')
    async delete(@Param('id') id: string) {

        var product = await this.service.delete(id);
        return product;

    }

    @Patch('edit/:id')
    async editProduct(@Body() editedProduct: UpdateProductDto, @Param('id') id:string ) {

        var product = this.service.editProduct(editedProduct, id);
        return product;
        
    }

    @Get("get/:id")
    async getProductWithStore(@Param('id') id:string){
        const product = this.service.getProductWithStore(id);
        return product;
    }

    


}
