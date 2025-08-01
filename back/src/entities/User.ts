//Importing modules
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

//Created new user entity
@Entity({
  name: "users",
})
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 100,
    unique: true,
  })
  email: string;

  @Column()
  birthdate: Date;

  @Column({
    type: "int",
    unique: true,
  })
  Dni: number;

  //Credential relation
  @OneToOne(() => Credential, (credential) => credential.user)
  @JoinColumn()
  credential: Credential;

  //Appointment relation
  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
}

export default User;
