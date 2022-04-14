import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Store, StoreDocument} from './schemas/store.schema';
import {RegisterStoreDto} from './dto/register-store.dto';

@Injectable()
export class StoreService {
    constructor(@InjectModel(Store.name) private readonly storeModel: Model<StoreDocument>) {}

    async create(registerStoreDto: RegisterStoreDto): Promise<Store>{
        console.log('oluyor')
        const createdStore = new this.storeModel(registerStoreDto);
        return createdStore.save();
    }

}
