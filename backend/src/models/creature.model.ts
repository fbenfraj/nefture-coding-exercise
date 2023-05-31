import {
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  DataType,
  Unique,
} from "sequelize-typescript";
import BaseModel from "./base.model";

@Table({
  tableName: "Creatures",
  timestamps: true,
})
export default class Creature extends BaseModel {
  @PrimaryKey
  @AutoIncrement
  @Column
  creatureId!: number;

  @Unique
  @Column(DataType.STRING)
  address!: string;

  @Column(DataType.INTEGER)
  heroId!: number;

  @Column(DataType.STRING)
  side!: string;
}
