import {Module} from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { DatabaseModule } from 'src/database/database.providers';
import { accountsProvider } from './accounts.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [AccountsController],
    providers: [
        AccountsService,
        ...accountsProvider,
    ],
})
export class AccountsModule {}
