import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { SettingDataType } from "../setting.entity";
export declare class SettingDataTypeConstraint implements ValidatorConstraintInterface {
    validate(value: any, validationArguments: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CreateSettingDto {
    name: string;
    dataType: SettingDataType;
    accountId: number;
    value: string | number | boolean | any;
}
