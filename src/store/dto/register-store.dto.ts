import { IsNotEmpty, IsString, Length, IsInt} from 'class-validator';
import { OwnerDto } from './owner.dto';


export class RegisterStoreDto {
    @IsNotEmpty()
    @IsString()
    storeName: string;

    @IsNotEmpty()
    owner: OwnerDto;

    rating: number;

    @IsNotEmpty()
    joinCode: number;
}