import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Doctors } from "./Doctors";
import { Patients } from "./Patients";
import { PrescriptionItems } from "./PrescriptionItems";

@Entity()
export class Prescriptions {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @Column({ type: "integer", default: 0 })
  status: number;

  @ManyToOne(() => Doctors)
  doctor: Doctors;

  @ManyToOne(() => Patients)
  patient: Patients;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @OneToMany(() => PrescriptionItems, (item) => item.prescription)
  items: PrescriptionItems[];
}
