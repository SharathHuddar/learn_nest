import { Body, Controller, Delete, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { Setting } from './setting.entity';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { BasicAuthGaurd } from 'src/auth/auth.gaurd';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) {}

    @Post()
    @UseGuards(BasicAuthGaurd)
    async createSetting(@Body() createSettingDto: CreateSettingDto): Promise<Setting> {
        return this.settingsService.createSetting(createSettingDto);
    }

    @Patch(':id')
    @UseGuards(BasicAuthGaurd)
    async updateSetting(@Param('id') id: number, @Body() updateSettingDto: UpdateSettingDto): Promise<Setting> {
        return this.settingsService.updateSetting(id, updateSettingDto);
    }

    @Delete(':id')
    @UseGuards(BasicAuthGaurd)
    async deleteSetting(@Param('id') id: number): Promise<void> {
        return this.settingsService.deleteSetting(id);
    }
}
