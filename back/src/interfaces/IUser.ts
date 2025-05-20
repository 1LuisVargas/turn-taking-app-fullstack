//Created new user interface
interface IUser {
    id: number;
    name: string;
    email: string;
    birthdate: string; //TODO: Change to Date once using postgres
    Dni: number;
    credentialsId: number;
}

export default IUser;