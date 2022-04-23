import { User } from '../../user/schemas/user.schema';

export interface IPaymentMethod {
    readonly cardNumber: number;
    readonly expirationDate: Date;
    readonly cvv: number;
    readonly name: string;
    readonly user: User;
}