import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @Column()
  fio: string;

  @Column()
  birth_date: string;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}
