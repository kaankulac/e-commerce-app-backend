import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';
@Module({
  providers: [CommentService],
  controllers: [CommentController],
  imports: [MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])]
})
export class CommentModule {}
