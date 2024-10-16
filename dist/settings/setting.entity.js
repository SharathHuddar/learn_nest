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
exports.Setting = exports.SettingDataType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const account_entity_1 = require("../accounts/account.entity");
var SettingDataType;
(function (SettingDataType) {
    SettingDataType["STRING"] = "STRING";
    SettingDataType["NUMBER"] = "NUMBER";
    SettingDataType["BOOLEAN"] = "BOOLEAN";
    SettingDataType["JSON"] = "JSON";
})(SettingDataType || (exports.SettingDataType = SettingDataType = {}));
let Setting = class Setting extends sequelize_typescript_1.Model {
};
exports.Setting = Setting;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Setting.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Setting.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(SettingDataType),
        allowNull: false
    }),
    __metadata("design:type", String)
], Setting.prototype, "dataType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Setting.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => account_entity_1.Account),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.NUMBER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Setting.prototype, "accountId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => account_entity_1.Account),
    __metadata("design:type", account_entity_1.Account)
], Setting.prototype, "account", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'created_at' }),
    __metadata("design:type", Date)
], Setting.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'updated_at' }),
    __metadata("design:type", Date)
], Setting.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    (0, sequelize_typescript_1.Column)({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], Setting.prototype, "deletedAt", void 0);
exports.Setting = Setting = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true
    })
], Setting);
//# sourceMappingURL=setting.entity.js.map