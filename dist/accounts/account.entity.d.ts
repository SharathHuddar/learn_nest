import { Model } from "sequelize-typescript";
export declare class Account extends Model {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
