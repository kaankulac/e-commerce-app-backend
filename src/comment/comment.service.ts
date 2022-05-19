import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { Product, ProductDocument } from 'src/product/schemas/product.schema';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>,
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    
    
    ) {}

    async create(createCommentDto: CreateCommentDto) : Promise<Comment> {
        const createdComment = new this.commentModel(createCommentDto);
        const user = await this.userModel
            .findByIdAndUpdate(createCommentDto.user,{ $push: {comments: createdComment._id}})
        const product = await this.productModel
            .findByIdAndUpdate(createCommentDto.product, { $push: { comments: createdComment._id}})

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

    async getComment(id: string){
        const comment = await this.commentModel
            .findById(id)
            .populate('product')
            .populate('user')
        return comment
    }
}
