import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Methods {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  title: string;
}
