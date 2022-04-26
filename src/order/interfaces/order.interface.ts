import { Store } from '../../store/schemas/store.schema';
import { User } from '../../user/schemas/user.schema';

export interface IOrder {
    readonly user: string;
    readonly store: string;
    readonly products: string[];
    readonly createdAt: Date;
}