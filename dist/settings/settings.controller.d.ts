import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { Setting } from './setting.entity';
import { UpdateSettingDto } from './dto/update-setting.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    createSetting(createSettingDto: CreateSettingDto): Promise<Setting>;
    updateSetting(id: number, updateSettingDto: UpdateSettingDto): Promise<Setting>;
    deleteSetting(id: number): Promise<void>;
}
