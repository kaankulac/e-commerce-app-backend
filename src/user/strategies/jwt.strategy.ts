import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import { Config } from '../../app.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:true,
            secretOrKey: Config.jwtSecretKey
        });
    }

    async validateUser(payload: IJwtPayload) {
        
        return {userName: payload.userName, userId: payload.userId};
    }
}