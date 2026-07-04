import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pharmacies {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  login: string;

  @Column()
  password: string;
}
