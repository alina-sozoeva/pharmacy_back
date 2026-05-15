import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DrugForms } from "./DrugForms";
import { Doses } from "./Doses";
import { Methods } from "./Methods";

@Entity()
export class Drugs {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @Column()
  nameid: string;

  @ManyToOne(() => DrugForms)
  form: DrugForms;

  @ManyToOne(() => Methods)
  method: Methods;
}
