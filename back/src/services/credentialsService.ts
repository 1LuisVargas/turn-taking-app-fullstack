//Importing modules;
import { credentialRepository } from "../config/data-source";
import Credential from "../entities/Credential";
import User from "../entities/User";
import { getUserByID } from "./usersService";

//Service to create a new credential
export const createCredential = async (
  username: string,
  password: string,
  userId: number
): Promise<Credential> => {
  //Creating the new credential
  const newCredential = await credentialRepository.create({
    username,
    password,
    user: await getUserByID(userId),
  });

  //Saving the new credential to the DB, and returning the ID
  const results: Credential = await credentialRepository.save(newCredential);
  return results;
};

//Service to check credentials
export const checkCredentials = async (
  username: string,
  password: string
): Promise<User> => {
  const foundCredential: Credential | null =
    await credentialRepository.findOneBy({ username, password });
    console.log(foundCredential);
  //If the credential is found, return the ID, else throw an error
  if (foundCredential) {
    return foundCredential.user;
  } else {
    throw new Error("Credentials not found");
  }
};
