import { BasicStrategy } from "passport-http";
declare const AuthService_base: new (...args: any[]) => BasicStrategy;
export declare class AuthService extends AuthService_base {
    private readonly users;
    constructor();
    validateUser(username: string, password: string, done: Function): Promise<any>;
}
export {};
