import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    handleRequest(err, user, info, context, status) {
        console.log("istek")
        const request = context.switchToHttp().getRequest();
        const { userName, password } = request.body;
        if (!userName || !password) throw new HttpException({ message: "Username or password incorrect" }, HttpStatus.BAD_REQUEST)
        return request.body;
    }
}