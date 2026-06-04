import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Doctors } from "./Doctors";
import { Patients } from "./Patients";

@Entity()
export class Prescriptions {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @ManyToOne(() => Doctors)
  doctor: Doctors;

  @ManyToOne(() => Patients)
  patient: Patients;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;
}
