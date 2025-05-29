//Importing modules
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

//Created new credential entity
@Entity({
  name: "credentials",
})
class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    unique: true,
  })
  username: string;

  @Column({
    length: 100,
  })
  password: string;

  //User relation
  @OneToOne(() => User, (user) => user.credential, {eager: true})
  @JoinColumn()
  user: User;
}

export default Credential;
