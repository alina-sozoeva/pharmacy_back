import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quantityes {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  title: string;
}
