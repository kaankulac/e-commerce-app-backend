import { Body, Controller, HttpStatus, Post, Delete, Patch, Get, UseGuards, Request, Param, HttpException,Res } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';
import { PasswordHelper } from '../common/helpers/password.helper';
import { IUser } from './interfaces/user.interface';
import { Product } from 'src/product/schemas/product.schema';
import { User } from './schemas/user.schema';
import { updateUserDto } from './dto/update-user.dto';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { Response } from 'express';
@Controller()
export class UserController {
    constructor(
        private readonly service: UserService,
        private passwordHelper: PasswordHelper
    ) { }

    @UseGuards(LocalAuthGuard) //LocalAuthGuard ile gelen auth isteğini erişim izni veriyoruz.
    @Post('user/login')
    async login(@Request() req, @Res({passthrough:true}) res: Response) {
        console.log('istek geldi')
        const token = this.service.login(req.body);
        const secretData = {
            token: token,
            refreshToken: ''
        }
        res.cookie('auth-cookie',secretData,{httpOnly:true})
        return token
    }
    @Post('user/register')
    async create(@Body() registerUserDto: RegisterUserDto) {
        console.log("çalıştı")
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

    @Post('user/shopcart/add/:id')
    async addItemToShopcart(@Param('id') id:string, @Body("productID") productID: Product) {
        console.log("shopcart")

        const user = this.service.addItemToShopcart(id, productID);
        return user;

    }

    @Post('user/shopcart/increase/:id')
    async increaseItemToShopcart(@Param('id') id:string, @Body('productID') productID: Product) {
        const user = this.service.decreaseItemToShopcart(id, productID);
        return user;
    }

    @Delete('user/shopcart/delete/:id')
    async deleteItemToShopcart(@Param('id') id:string, @Body('productID') productID: Product) {
        const res = this.service.deleteItemToShopcartItem(id, productID);
        return res;
    }

    @Get('user/get/:id') 
    async getUserWithShopcart(@Param('id') id:string) {

        const user = this.service.getUserWithShopcart(id);
        return user;


    }

    @Delete('user/delete/:id')
    async deleteUser(@Param('id') id:string) {
        const res = this.service.deleteUser(id);
        return res;
    }

    @Patch('user/edit/:id')
    async editUser(@Param('id') id:string, @Body() editedUser: updateUserDto){
        const res = this.service.editUser(editedUser, id);
        return res;
    }

    @UseGuards(AdminGuard)
    @Post('user/deneme')
    async deneme(@Body() user: updateUserDto){
        const res = this.service.deneme(user)
        return res;
    }


    @Get('users')
    async getAllUsers(){
        console.log('çalıştı')
        const res = this.service.getAllUsers()
        return res;
    }

    @Get('user/username/:username')
    async getUserByUsername(@Param('username') username: string){

        const user = this.service.getUserByUsername(username);
        return user;
    }
    
    @Get('user/verify/:id')
    async verifyEmail(@Param('id') id: string){
        
        const user = this.service.verifyEmail(id);
        return user;
    }
}