import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Setting } from "./setting.entity";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";

@Injectable()
export class SettingsService{
    constructor(
        @Inject('SETTINGS_REPOSITORY')
        private settingsRepository: typeof Setting
    ) {}

    async createSetting(createSettingDto: CreateSettingDto): Promise<Setting> {
        return this.settingsRepository.create({...createSettingDto});
    }

    async updateSetting(id: number, updateSettingDto: UpdateSettingDto): Promise<Setting> {
        const setting = await this.settingsRepository.findByPk(id);
        if (!setting) {
            throw new NotFoundException(`Setting with ID ${id} not found`);
        }
        await setting.update(updateSettingDto);

        return setting;
    }

    async deleteSetting(id: number): Promise<void> {
        const setting = await this.settingsRepository.findByPk(id);
        if (!setting) {
            throw new NotFoundException(`Setting with ID ${id} not found`);
        }
        await setting.destroy();
    }
}
