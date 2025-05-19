//Created new credential interface
export interface ICredential {
    id: number;
    username: string;
    password: string;
}

export const credentials: ICredential[] = [
    {
        id: 1,
        username: "test1",
        password: "test1"
    },
    {
        id: 2,
        username: "test2",
        password: "test2"
    },
    {
        id: 3,
        username: "test3",
        password: "test3"
    }
];

export default ICredential;