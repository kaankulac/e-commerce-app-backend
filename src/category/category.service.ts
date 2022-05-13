import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Model } from 'mongoose';


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

    async get(model: string, type: string, trademark: string, releaseYear: number) {
            const categories = await this.categoryModel
                .find({
                    model: model ? model : { $ne: 0},
                    trademark: trademark ? trademark : { $ne: 0},
                    type: type ? type : {$ne: 0},
                    releaseYear: releaseYear ? releaseYear : {$ne : 0}
                })
            return categories;
    }
}
