import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Frequencyes } from "./Frequencyes";
import { Quantityes } from "./Quantityes";
import { Durations } from "./Durations";
import { Doses } from "./Doses";
import { MealTimings } from "./MealTimings";
import { Prescriptions } from "./Prescriptions";
import { Drugs } from "./Drugs";

//frequencyes - Продолжительность
//quantityes - Количество таблеток
//durations - Количество дней
//doses - Дозировка
//meal_timings - Прием

@Entity()
export class PrescriptionItems {
  @PrimaryGeneratedColumn("uuid")
  guid: string;

  @ManyToOne(() => Drugs)
  drug: Drugs;

  @ManyToOne(() => Prescriptions, (prescription) => prescription.items)
  prescription: Prescriptions;

  @ManyToOne(() => Frequencyes)
  frequency: Frequencyes;

  @ManyToOne(() => Quantityes)
  quantity: Quantityes;

  @ManyToOne(() => Durations)
  duration: Durations;

  @ManyToOne(() => Doses)
  dose: Doses;

  @ManyToOne(() => MealTimings)
  meal_timing: MealTimings;
}
