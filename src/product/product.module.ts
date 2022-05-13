import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { CategorySchema, Category } from 'src/category/schemas/category.schema';
import { CategoryService } from 'src/category/category.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema}, {name: Category.name, schema: CategorySchema}])]
})
export class ProductModule {}
