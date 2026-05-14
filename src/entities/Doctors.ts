import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Clinics } from "./Clinics";

@Entity()
export class Doctors {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @Column()
  nameid: string;

  @Column()
  phone: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @ManyToOne(() => Clinics)
  clinic: Clinics;
}
