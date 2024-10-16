import { SettingDataType } from "../setting.entity";
export declare class UpdateSettingDto {
    name?: string;
    dataType?: SettingDataType;
    accountId?: number;
    value?: string | number | boolean | any;
}
