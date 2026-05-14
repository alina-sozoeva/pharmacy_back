import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patients {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @Column()
  fio: string;

  @Column({ type: "date" })
  birth_date: Date;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}
