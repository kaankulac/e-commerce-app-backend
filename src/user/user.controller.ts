import { Body, Controller, HttpStatus, Post, Get, UseGuards, Request, Param, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';
import { PasswordHelper } from '../common/helpers/password.helper';
import { IUser } from './interfaces/user.interface';
import { Product } from 'src/product/schemas/product.schema';
import { User } from './schemas/user.schema';

@Controller()
export class UserController {
    constructor(
        private readonly service: UserService,
        private passwordHelper: PasswordHelper
    ) { }

    @UseGuards(LocalAuthGuard) //LocalAuthGuard ile gelen auth isteğini erişim izni veriyoruz.
    @Post('user/login')
    async login(@Request() req) {
        return this.service.login(req.user);
    }

    @Post('user/register')
    async create(@Body() registerUserDto: RegisterUserDto) {
        const userCheck = await this.service.registerFindUser(registerUserDto.userName, registerUserDto.email);
        if (userCheck) throw new HttpException('REGISTER_EXISTING_USER', HttpStatus.INTERNAL_SERVER_ERROR);
        registerUserDto.password = await this.passwordHelper.passwordHash(registerUserDto.password);
        await this.service.register(registerUserDto);
    }

    @UseGuards(JwtAuthGuard) //JwtAuthGuard ile yetkisiz istekleri engelliyoruz.
    @Get('user/profile')
    async getProfile(@Request() req) {
        const userId = req.user.userId;
        const user: User = await this.service.findUserById(userId);
        return user;
    }

    @UseGuards(JwtAuthGuard) //JwtAuthGuard ile yetkisiz istekleri engelliyoruz.
    @Get('user/:id')
    async getUserById(@Param('id') id: string) {
        const user: User = await this.service.findUserById(id);
        if (!user) throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        return user;
    }

    @Post('user/add/:id')
    async addItemToShopcart(@Param('id') id:string, @Body("productID") productID: Product) {

        const user = this.service.addItemToShopcart(id, productID);
        return user;

    }

    @Get('user/get/:id') 
    async getUserWithShopcart(@Param('id') id:string) {

        const user = this.service.getUserWithShopcart(id);
        return user;


    }
    
}