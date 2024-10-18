import { AutoIncrement, BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Account } from "src/accounts/account.entity";

export enum SettingDataType {
    STRING = 'STRING',
    NUMBER = 'NUMBER',
    BOOLEAN = 'BOOLEAN',
    JSON = 'JSON',
}


@Table({
    timestamps: true
})
export class Setting extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.STRING)
    name: string;

    @Column({
        type: DataType.ENUM,
        values: Object.values(SettingDataType),
        allowNull: false
    })
    dataType: SettingDataType;


    @Column(DataType.STRING)
    value: string;

    @ForeignKey(() => Account)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    accountId: number;

    @BelongsTo(() => Account)
    account: Account;


    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt: Date;
}
