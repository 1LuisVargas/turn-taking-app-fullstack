//Importing modules
import ICredential from "../interfaces/ICredential";

//Created new credential fake DB
const credentialsDB: ICredential[] = [];
let credentialId: number = 1;

//Service to create a new credential
export const createCredential = async (username: string, password: string):Promise<ICredential["id"]> => {
    const newCredential: ICredential = {
        id: credentialId,
        username: username,
        password: password
    }
    credentialsDB.push(newCredential);
    credentialId++;
    return newCredential.id;
}

//Service to check credentials
export const checkCredentials = async (username: string, password: string):Promise<ICredential["id"]> => {
    const foundCredential: ICredential | undefined = credentialsDB.find((credential: ICredential) => credential.username === username && credential.password === password);
    //If the username and password match, return the id, else throw an error
    if (foundCredential) {
        return foundCredential.id;
    }
    else {
        throw new Error("Invalid credentials");
    }
}