//Importing modules
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

export default Appointment;
