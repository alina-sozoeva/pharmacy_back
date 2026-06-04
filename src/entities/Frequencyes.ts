import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Frequencyes {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  title: string;
}
