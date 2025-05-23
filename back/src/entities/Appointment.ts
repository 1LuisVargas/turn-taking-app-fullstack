import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("appointments")
class Appointment {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
  date: string; //TODO: change to Date once using postgres
  
  @Column()
  time: string;

  @Column()
  userId: number;
  
  @Column({
    type: "enum",
    enum: 
    {
      ACTIVE: "active",
      CANCELLED: "cancelled"
    }
  })
  status: string
}

export default Appointment;