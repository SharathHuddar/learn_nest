import { Setting } from "./setting.entity";

export const settingsProvider = [
    {
        provide: 'SETTINGS_REPOSITORY',
        useValue: Setting,
    }
]
