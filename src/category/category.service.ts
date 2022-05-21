import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Model } from 'mongoose';
import { UpdateCategoryDto } from './dto/update-category.dto';


@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>) { }

    async create(categoryDto: CreateCategoryDto) {
        const category = new this.categoryModel(categoryDto);
        return category.save();
    }

    async delete(id: string) {
        try {
            const category = await this.categoryModel
                .findByIdAndDelete(id)
            return category;
        }
        catch (err) {
            return err;
        }
    }

    async edit(id: string, updatedCategory:UpdateCategoryDto){
        try {

            const category = await this.categoryModel
                .findByIdAndUpdate(id,updatedCategory)
            return category;

        }catch(err){

            return err;

        }
    }
}
