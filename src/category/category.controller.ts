import { Controller, Get, Delete, Patch, Post, Body, Param } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(
        private readonly service: CategoryService,
    ) {}

    @Post('create')
    async create(@Body() categoryDto: CreateCategoryDto){
        const category = this.service.create(categoryDto);
        return category;
    }

    @Delete('delete/:id')
    async delete(@Param('id') id:string){
        const res = this.service.delete(id);
        return res;
    }

    @Get('get/:type')
    async getCategoryByType(@Param('type') type: string){

        const categories = this.service.getByType(type);
        return categories;

    }

    @Get('get/:trademark')
    async getCategoryByTrademark(@Param('trademark') trademark: string){

        const categories = this.service.getByTrademark(trademark);
        return categories;

    }

    @Get('get/:model')
    async getCategoryByModel(@Param('model') model: string){

        const categories = this.service.getByModel(model);
        return categories;

    }

}
