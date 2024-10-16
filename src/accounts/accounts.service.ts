import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { Account } from "./account.entity";
import { CreateAccountDto } from "./dto/create-account.dto";

@Injectable()
export class AccountsService {
    constructor(
        @Inject('ACCOUNTS_REPOSITORY')
        private accountsRepository: typeof Account
    ) {}

    async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
        try {
            const account = await this.accountsRepository.create({ ...createAccountDto });
            return account;
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                throw new ConflictException(`An account with the name "${createAccountDto.name}" already exists.`)
            }
            throw error;
        }
    }
}
