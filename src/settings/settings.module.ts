import { Module } from "@nestjs/common";
import { SettingsController } from "./settings.controller";
import { SettingsService } from "./settings.service";
import { settingsProvider } from "./settings.providers";
import { DatabaseModule } from "src/database/database.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [SettingsController],
    providers: [
        SettingsService,
        ...settingsProvider
    ],

})
export class SettingsModule {}
