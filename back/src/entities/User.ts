//Importing modules
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

//Created new user entity
@Entity({
    name: "users",
})
class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    birthdate: string; //TODO: Change to Date once using postgres
    
    @Column({
        type: "int",
        unique: true,
    })
    Dni: number;

    @OneToOne(() => Credential, (credential) => credential.id)
    @JoinColumn()
    credential: Credential
}

export default User;