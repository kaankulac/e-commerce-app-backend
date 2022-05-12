import { Controller, Get, Delete, Patch, Post, Body, Param, Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { ParamsDto } from './dto/params.dto';

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

    @Get('get/')
    async getCategoryByType(@Query() params: ParamsDto){
        var type = params.type || null;
        var model = params.model || null;
        var trademark = params.trademark || null;
        var releaseYear = params.releaseYear || null;

        const categories = this.service.get(model, type, trademark, releaseYear);
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
