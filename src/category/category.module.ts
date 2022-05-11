import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category, CategorySchema } from './schemas/category.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}])]
})
export class CategoryModule {}
