import ICredential, { credentials } from "../interfaces/ICredential";

const credentialsDB: ICredential[] = credentials;
let credentialId: number = 1;

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

export const checkCredentials = async (username: string, password: string):Promise<ICredential["id"]> => {
    const foundCredential = credentialsDB.find((credential: ICredential) => credential.username === username && credential.password === password);
    if (foundCredential) {
        return foundCredential.id;
    }
    else {
        throw new Error("Invalid credentials");
    }
}