import IUser from "../interfaces/IUser";
import createUserDTO from "../dtos/createUserDTO";
import { createCredential } from "./credentialsService";

//Created new user fake DB
const usersDB: IUser[] = [];
let userId: number = 1;

//Service to get all users
export const getUsers = async ():Promise<IUser[]> => {
    return usersDB;
};

//Service to get a user by ID
export const getUserByID = async (id: number):Promise<IUser> => {
    const foundUser: IUser | undefined = usersDB.find((user: IUser) => user.id === id);
    //If the user is found, return the user, else throw an error
    if (foundUser) {
        return foundUser;
    }
    else {
        throw new Error("User not found");
    }
}

//Service to create a new user
export const createUser = async (createUserDTO: createUserDTO):Promise<IUser> => {
    //Calling the service to create a new credential
    const newCredentialID = await createCredential(createUserDTO.username, createUserDTO.email);

    //Creating the new user
    const newUser :IUser = {
        id: userId,
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        Dni: Number(createUserDTO.Dni),
        credentialsId: newCredentialID
    }

    //Pushing the new user to the DB
    usersDB.push(newUser);
    userId++;
    return newUser;
}