import { Controller, Get, Delete, Patch, Post, Body, Param, Query } from '@nestjs/common';
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
}
