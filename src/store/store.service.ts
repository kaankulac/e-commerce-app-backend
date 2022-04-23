import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store, StoreDocument } from './schemas/store.schema';
import { RegisterStoreDto } from './dto/register-store.dto';
import { IStore } from './interfaces/store.interface';
import { UpdateStoreDto } from './dto/update-store.dto';
import { IUser } from '../user/interfaces/user.interface';

@Injectable()
export class StoreService {
    constructor(@InjectModel(Store.name) private readonly storeModel: Model<StoreDocument>) { }

    async create(registerStoreDto: RegisterStoreDto): Promise<Store> {
        const createdStore = new this.storeModel(registerStoreDto);
        return createdStore.save();
    }

    async findStoreById(id: string): Promise<IStore> {
        try {
            const find = await this.storeModel.findById(id).exec();
            return find;
        } catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    async deleteStore(id: string) {
        try {
            const store = await this.storeModel.findById(id).exec();
            if (!store) {
                throw new Error;
            } else {
                await store.deleteOne();

            }
        }
        catch (err) {
            throw new HttpException('Store Does Not Exist!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async editStore(editedStore:UpdateStoreDto,storeId:string) {
        const store = await this.storeModel
            .findByIdAndUpdate({_id:storeId},editedStore,{ new: true })
        if(!store){
            throw new NotFoundException();
        }
        return store;

    }

}
