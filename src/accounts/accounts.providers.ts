import { Account } from "./account.entity";

export const accountsProvider = [
    {
        provide: 'ACCOUNTS_REPOSITORY',
        useValue: Account,
    }
]
