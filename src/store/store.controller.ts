import { Controller, Body, Post, Get,Delete, Request, Param, HttpStatus, HttpException, Patch } from '@nestjs/common';
import { StoreService } from './store.service';
import { RegisterStoreDto } from './dto/register-store.dto';
import { IStore } from './interfaces/store.interface';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './schemas/store.schema';
@Controller('store')
export class StoreController {

    constructor(
        private readonly service: StoreService,
    ) { }


    @Post('/register')
    async register(@Body() registerStoreDto: RegisterStoreDto){
        await this.service.create(registerStoreDto);
    }

    @Get('/get/:id')
    async get(@Param('id') id: string) {

        const store: IStore = await this.service.findStoreById(id);
        if (!store.id) throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        return store;

    }
    
    @Delete('/delete/:id')
    async deleteStore(@Param('id') id:string){
        await this.service.deleteStore(id);
        
    }

    @Patch('/edit/:id')
    async editStore(@Body() editedStore: UpdateStoreDto, @Param('id') id:string){
        this.service.editStore(editedStore, id)
                      
    }

}
