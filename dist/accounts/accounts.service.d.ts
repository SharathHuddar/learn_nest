import { Account } from "./account.entity";
import { CreateAccountDto } from "./dto/create-account.dto";
export declare class AccountsService {
    private accountsRepository;
    constructor(accountsRepository: typeof Account);
    createAccount(createAccountDto: CreateAccountDto): Promise<Account>;
}
