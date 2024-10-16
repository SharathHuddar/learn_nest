"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingDto = exports.SettingDataTypeConstraint = void 0;
const class_validator_1 = require("class-validator");
const setting_entity_1 = require("../setting.entity");
let SettingDataTypeConstraint = class SettingDataTypeConstraint {
    validate(value, validationArguments) {
        const { dataType } = validationArguments.object;
        switch (dataType) {
            case setting_entity_1.SettingDataType.STRING:
                return typeof value === 'string' && value.trim().length > 0;
            case setting_entity_1.SettingDataType.NUMBER:
                return typeof value === 'number' && !isNaN(value);
            case setting_entity_1.SettingDataType.BOOLEAN:
                return typeof value === 'boolean';
            case setting_entity_1.SettingDataType.JSON:
                try {
                    JSON.parse(JSON.stringify(value));
                    return true;
                }
                catch {
                    return false;
                }
            default:
                return false;
        }
    }
    defaultMessage(args) {
        const { dataType } = args.object;
        return `Value must be of type ${dataType}`;
    }
};
exports.SettingDataTypeConstraint = SettingDataTypeConstraint;
exports.SettingDataTypeConstraint = SettingDataTypeConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], SettingDataTypeConstraint);
class CreateSettingDto {
}
exports.CreateSettingDto = CreateSettingDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(setting_entity_1.SettingDataType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "dataType", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSettingDto.prototype, "accountId", void 0);
__decorate([
    (0, class_validator_1.Validate)(SettingDataTypeConstraint),
    __metadata("design:type", Object)
], CreateSettingDto.prototype, "value", void 0);
//# sourceMappingURL=create-setting.dto.js.map