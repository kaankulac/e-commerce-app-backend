import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Model } from 'mongoose';


@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>) { }

    async create(categoryDto: CreateCategoryDto){
        const category = new this.categoryModel(categoryDto);
        return category.save();
    }


}
