import IUser from "../interfaces/IUser";
import createUserDTO from "../dtos/createUserDTO";
import { createCredential } from "./credentialsService";

const usersDB: IUser[] = [];
let userId: number = 1;

export const getUsers = async ():Promise<IUser[]> => {
    return usersDB;
};

export const getUserByID = async (id: number):Promise<IUser> => {
    const foundUser = usersDB.find((user: IUser) => user.id === id);
    if (foundUser) {
        return foundUser;
    }
    else {
        throw new Error("User not found");
    }
}

export const createUser = async (createUserDTO: createUserDTO):Promise<IUser> => {
    const newCredentialID = await createCredential(createUserDTO.name, createUserDTO.email);

    const newUser :IUser = {
        id: userId,
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthday: new Date(createUserDTO.birthday),
        Dni: createUserDTO.Dni,
        credentialsId: newCredentialID
    }

    usersDB.push(newUser);
    userId++;
    return newUser;
}