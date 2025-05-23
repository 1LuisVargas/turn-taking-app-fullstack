//Importing modules
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

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
    length: 5,
    type: "int",
  })
  userId: number;

  @Column({
    type: "enum",
    enum: {
      ACTIVE: "active",
      CANCELLED: "cancelled",
    },
  })
  status: string;

  //User relationship
  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}

export default Appointment;
