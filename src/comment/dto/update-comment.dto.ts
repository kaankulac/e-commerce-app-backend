import { IsOptional, IsString, Length} from 'class-validator';

export class UpdateCommentDto {
    @IsOptional()
    user: string;

    @IsOptional()
    product: string;

    @IsOptional()
    @IsString()
    @Length(10,50)
    comment: string;

    @IsOptional()
    rate: number;

}