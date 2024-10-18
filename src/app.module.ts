import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { SettingsModule } from './settings/settings.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AccountsModule, SettingsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
