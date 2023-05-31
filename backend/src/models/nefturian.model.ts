import {
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
} from "sequelize-typescript";
import BaseModel from "./base.model";

@Table({
  tableName: "Nefturians",
  timestamps: true,
})
export default class Nefturian extends BaseModel {
  @PrimaryKey
  @AutoIncrement
  @Column
  nefturianId!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.TEXT)
  description: string | undefined;

  @Column(DataType.STRING)
  imageUrl: string | undefined;
}
