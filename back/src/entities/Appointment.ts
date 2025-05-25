//Importing modules
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

//Created the enum for status
export enum appointmentStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

//Created new appointment entity
@Entity({ name: "appointments" })
class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string; //TODO: change to Date

  @Column({
    length: 5,
  })
  time: string;

  @Column({
    type: "int",
  })
  userId: number;

  @Column({
    type: "enum",
    enum: "appointmentStatus",
    default: appointmentStatus.ACTIVE,
  })
  status: appointmentStatus;

  //User relationship
  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}

export default Appointment;
