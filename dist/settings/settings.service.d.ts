import { Setting } from "./setting.entity";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";
export declare class SettingsService {
    private settingsRepository;
    constructor(settingsRepository: typeof Setting);
    createSetting(createSettingDto: CreateSettingDto): Promise<Setting>;
    updateSetting(id: number, updateSettingDto: UpdateSettingDto): Promise<Setting>;
    deleteSetting(id: number): Promise<void>;
}
