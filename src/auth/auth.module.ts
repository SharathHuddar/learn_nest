import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SettingsModule } from 'src/settings/settings.module';
import { AuthService } from './auth.service';

@Module({
    imports: [SettingsModule, PassportModule],
    providers: [AuthService],
})
export class AuthModule {}
