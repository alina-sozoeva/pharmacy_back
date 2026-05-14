import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DrugForms {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  name: string;
}
