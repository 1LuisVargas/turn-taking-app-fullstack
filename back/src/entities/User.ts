//Importing modules
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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

  @Column({
    length: 10,
  })
  birthdate: string; //TODO: Change to Date

  @Column({
    length: 10,
    type: "int",
    unique: true,
  })
  Dni: number;

  @OneToOne(() => Credential, (credential) => credential.id)
  @JoinColumn()
  credential: Credential;
}

export default User;
