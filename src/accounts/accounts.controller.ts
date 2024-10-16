import { Body, Controller, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './account.entity';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Post()
    async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
        return this.accountsService.createAccount(createAccountDto);
    }
}
