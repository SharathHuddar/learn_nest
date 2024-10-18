import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
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
        try {
            const setting = await this.settingsRepository.create({ ...createSettingDto });
            return setting;            
        } catch (error) {
            if (error.name === 'SequelizeForeignKeyConstraintError') {
                throw new BadRequestException('Invalid account reference');
            }
            throw error;
        }
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
