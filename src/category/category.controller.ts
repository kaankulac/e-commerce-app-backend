import { Controller, Get, Delete, Patch, Post, Body, Param, Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto';

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

    @Patch('edit/:id')
    async editCategory(@Param('id') id:string, @Query() updatedCategory: UpdateCategoryDto ){

        const category = this.service.edit(id,updatedCategory);
        return category;

    }

    @Get('get')
    async get(){
        const categories = this.service.get();
        return categories;
    }
}
