import { Controller, Body, Post, Get, Request, Param, HttpStatus, HttpException } from '@nestjs/common';
import { StoreService } from './store.service';
import { RegisterStoreDto } from './dto/register-store.dto';
import { IStore } from './interfaces/store.interface';

@Controller()
export class StoreController {

    constructor(
        private readonly service: StoreService,
    ) { }


    @Post('store/register')
    async register(@Body() registerStoreDto: RegisterStoreDto){
        console.log(registerStoreDto.storeName, registerStoreDto.joinCode, registerStoreDto.owner);
        await this.service.create(registerStoreDto);
    }

    @Get('store/get/:id')
    async get(@Request() req) {

    }    

}
