import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Durations {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  title: string;
}
