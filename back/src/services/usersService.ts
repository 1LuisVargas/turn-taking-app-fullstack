//Importing modules
import { userRepository } from "../config/data-source";
import createUserDTO from "../dtos/createUserDTO";
import User from "../entities/User";
import { createCredential } from "./credentialsService";

//Service to get all users
export const getUsers = async (): Promise<User[]> => {
  return await userRepository.find();
};

//Service to get a user by ID
export const getUserByID = async (id: number): Promise<User> => {
  //Finding the user by ID
  const foundUser: User | null = await userRepository.findOne({ 
    where: { id },
    relations: ["appointments"],
  });
  //If the user is found, return the user, else throw an error
  if (foundUser) {
    return foundUser;
  } else {
    throw new Error("User not found");
  }
};

//Service to create a new user
export const createUser = async (
  createUserDTO: createUserDTO
): Promise<User> => {
  //Checking if the user already exists
  const foundUser: User | null = await userRepository.findOneBy({
    email: createUserDTO.email,
  });
  //If the user already exists, throw an error
  if (foundUser) {
    throw new Error("User already exists");
  }

  //Creating the new user
  const newUser: User = await userRepository.create({
    name: createUserDTO.name,
    email: createUserDTO.email,
    birthdate: createUserDTO.birthdate,
    Dni: Number(createUserDTO.Dni),
  });
  await userRepository.save(newUser); //Saving the new user to the DB to have an ID
  
  //Creating the new credential
  const newCredential = await createCredential(createUserDTO.username, createUserDTO.password, newUser.id);

  //Adding the credential to the user
  newUser.credential = newCredential;

  //Saving the new user to the DB again to save with credential.
  await userRepository.save(newUser);
  
  return newUser;
};
