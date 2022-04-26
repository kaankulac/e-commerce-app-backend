import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>) {}

    async create(createCommentDto: CreateCommentDto) : Promise<Comment> {
        const createdComment = new this.commentModel(createCommentDto);
        return createdComment.save();
    }

    async delete(id) {
        const comment = await this.commentModel
            .findOneAndDelete(id)
        return comment;
    }

    async edit(updateCommentDto: UpdateCommentDto, id: string) {
        const comment = await this.commentModel
            .findOneAndUpdate({_id:id},updateCommentDto,{new: true});
        if(!comment) {
            throw new NotFoundException();
        }

        return comment;
    }
}
