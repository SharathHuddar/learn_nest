import { Module } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Account } from "src/accounts/account.entity";
import { Setting } from "src/settings/setting.entity";

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
            dialect: 'sqlite', // Use SQLite as the dialect
            storage: 'database.sqlite', // Path to the SQLite database file
        });
        sequelize.addModels([Account, Setting]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];


  @Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
  })
  export class DatabaseModule {}
