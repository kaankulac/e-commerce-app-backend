import { Controller, HttpException, HttpStatus, Body, Post, Delete, Patch, Param, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { IComment } from './interfaces/comment.interface';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schemas/comment.schema';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {

    constructor(
        private readonly service: CommentService,
    ) {}

    @Post('/create')
    async create(@Body() createCommentDto: CreateCommentDto) {
        await this.service.create(createCommentDto);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id:string){
        const res = await this.service.delete(id);
        return res;
    }

    @Patch('/edit/:id')
    async edit(@Body() updateCommentDto: UpdateCommentDto, @Param('id') id: string) {
        await this.service.edit(updateCommentDto, id);
    }

    @Get('/get/:id')
    async get(@Param('id') id:string){
        const comment = await this.service.getComment(id);
        return comment;
    }

}
