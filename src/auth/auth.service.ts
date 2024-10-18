import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { BasicStrategy } from "passport-http";

@Injectable()
export class AuthService extends PassportStrategy(BasicStrategy) {
    private readonly users = [
        {username: 'user1', password: 'pass1'},
        {username: 'user2', password: 'pass2'},
    ];

    constructor() {
        super((username: string, password: string, done: Function) => this.validateUser(username, password, done));
    }

    async validateUser(username: string, password: string, done: Function) {
        const user = this.users.find((u) => u.username===username && u.password===password)
        if (!user) {
            return done(new UnauthorizedException(), false);
        }

        return done(null, user);
    }
}
