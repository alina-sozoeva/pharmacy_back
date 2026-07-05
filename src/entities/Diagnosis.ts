import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Diagnosis {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  name: string;
}
