import { Controller, Get, Delete, Patch, Post, Body } from '@nestjs/common';
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

}
