import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doses {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  title: string;
}
