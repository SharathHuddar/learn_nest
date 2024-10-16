import { CanActivate, ExecutionContext } from "@nestjs/common";
declare const BasicAuthGaurd_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class BasicAuthGaurd extends BasicAuthGaurd_base implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
export {};
