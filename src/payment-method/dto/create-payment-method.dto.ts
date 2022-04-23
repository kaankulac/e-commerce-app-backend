import { IsCreditCard, IsNotEmpty, IsString } from "class-validator";
import { User } from '../../user/schemas/user.schema';

export class PaymentMethodDto {

    @IsNotEmpty()
    @IsCreditCard()
    cardNumber: string;

    @IsNotEmpty()
    expirationDate: Date;

    @IsNotEmpty()
    cvv: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    user: User;
}