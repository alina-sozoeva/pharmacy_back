import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clinics {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  nameid: string;

  @Column()
  adress: string;

  @Column()
  phone: string;
}
