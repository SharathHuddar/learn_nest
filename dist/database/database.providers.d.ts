import { Sequelize } from "sequelize-typescript";
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<Sequelize>;
}[];
export declare class DatabaseModule {
}
