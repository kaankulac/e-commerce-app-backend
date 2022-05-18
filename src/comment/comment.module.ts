import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { Product, ProductSchema } from 'src/product/schemas/product.schema';
@Module({
  providers: [CommentService],
  controllers: [CommentController],
  imports: [MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}, {name:Product.name, schema:ProductSchema}, {name: User.name, schema: UserSchema}])]
})
export class CommentModule {}
