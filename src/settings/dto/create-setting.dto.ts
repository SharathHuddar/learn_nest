import { IsBoolean, IsEnum, IsInt, IsJSON, IsNotEmpty, IsString, Validate, ValidateIf, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { SettingDataType } from "../setting.entity";


@ValidatorConstraint()
export class SettingDataTypeConstraint implements ValidatorConstraintInterface {
    validate(value: any, validationArguments: ValidationArguments): boolean {
        const { dataType } = validationArguments.object as CreateSettingDto;
        switch (dataType) {
            case SettingDataType.STRING:
              return typeof value === 'string' && value.trim().length > 0;
            case SettingDataType.NUMBER:
              return typeof value === 'number' && !isNaN(value);
            case SettingDataType.BOOLEAN:
              return typeof value === 'boolean';
            case SettingDataType.JSON:
              try {
                JSON.parse(JSON.stringify(value));
                return true;
              } catch {
                return false;
              }
            default:
              return false;
        }    
    }
    defaultMessage(args: ValidationArguments) {
        const { dataType } = args.object as CreateSettingDto;
        return `Value must be of type ${dataType}`;
    }
}

export class CreateSettingDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEnum(SettingDataType)
    @IsNotEmpty()
    dataType: SettingDataType

    @IsInt()
    @IsNotEmpty()
    accountId: number;

    @Validate(SettingDataTypeConstraint)
    value: string | number | boolean | any;
}
