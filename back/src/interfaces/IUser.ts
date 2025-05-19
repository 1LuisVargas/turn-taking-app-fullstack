//Created new user interface
export interface IUser {
    id: number;
    name: string;
    email: string;
    birthday: Date;
    Dni: number;
    credentialsId: number;
}

export const users: IUser[] = [
    {
        id: 1,
        name: "test1",
        email: "test1@test.com",
        birthday: new Date(),
        Dni: 1,
        credentialsId: 1
    },
    {
        id: 2,
        name: "test2",
        email: "test2@test.com",
        birthday: new Date(),
        Dni: 2,
        credentialsId: 2
    },
    {
        id: 3,
        name: "test3",
        email: "test3@test.com",
        birthday: new Date(),
        Dni: 3,
        credentialsId: 3
    }
];