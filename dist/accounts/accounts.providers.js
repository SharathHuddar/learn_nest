"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsProvider = void 0;
const account_entity_1 = require("./account.entity");
exports.accountsProvider = [
    {
        provide: 'ACCOUNTS_REPOSITORY',
        useValue: account_entity_1.Account,
    }
];
//# sourceMappingURL=accounts.providers.js.map