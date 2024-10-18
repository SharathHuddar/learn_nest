import { IsEnum, IsInt, IsOptional, IsString, Validate } from "class-validator";
import { SettingDataType } from "../setting.entity";
import { SettingDataTypeConstraint } from "./create-setting.dto";

export class UpdateSettingDto {
    @IsString()
    @IsOptional()
    name?: string;
    
    @IsEnum(SettingDataType)
    @IsOptional()
    dataType?: SettingDataType

    @IsInt()
    @IsOptional()
    accountId?: number;

    // The current implementation expects that value and dataType are sent together. The validation fails otherwise
    // TODO: Incase only one of value or dataType is sent, validate this based on values in DB
    @IsOptional()
    @Validate(SettingDataTypeConstraint)
    value?: string | number | boolean | any;
}
