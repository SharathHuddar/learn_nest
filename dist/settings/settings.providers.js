"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsProvider = void 0;
const setting_entity_1 = require("./setting.entity");
exports.settingsProvider = [
    {
        provide: 'SETTINGS_REPOSITORY',
        useValue: setting_entity_1.Setting,
    }
];
//# sourceMappingURL=settings.providers.js.map