import { IsNotEmpty, IsString, Length, IsInt} from 'class-validator';
import { User } from 'src/user/schemas/user.schema';

export class RegisterStoreDto {
    @IsNotEmpty()
    @IsString()
    storeName: string;

    @IsNotEmpty()
    owner: User;

    rating: number;

    @IsNotEmpty()
    joinCode: number;
}