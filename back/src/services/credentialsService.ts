//Importing modules;
import { credentialRepository } from "../config/data-source";
import Credential from "../entities/Credential";

//Service to create a new credential
export const createCredential = async (
  username: string,
  password: string
): Promise<Credential["id"]> => {
  //Creating the new credential
  const newCredential = await credentialRepository.create({
    username,
    password,
  });

  //Saving the new credential to the DB, and returning the ID
  const results: Credential = await credentialRepository.save(newCredential);
  return results.id;
};

//Service to check credentials
export const checkCredentials = async (
  username: string,
  password: string
): Promise<Credential["id"]> => {
  const foundCredential: Credential | null =
    await credentialRepository.findOneBy({ username, password });
  //If the credential is found, return the ID, else throw an error
  if (foundCredential) {
    return foundCredential.id;
  } else {
    throw new Error("Credentials not found");
  }
};
