import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MealTimings {
  @PrimaryGeneratedColumn({ type: "integer" })
  codeid: number;

  @Column()
  title: string;
}
