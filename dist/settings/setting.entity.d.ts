import { Model } from "sequelize-typescript";
import { Account } from "src/accounts/account.entity";
export declare enum SettingDataType {
    STRING = "STRING",
    NUMBER = "NUMBER",
    BOOLEAN = "BOOLEAN",
    JSON = "JSON"
}
export declare class Setting extends Model {
    id: number;
    name: string;
    dataType: SettingDataType;
    value: string;
    accountId: number;
    account: Account;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
