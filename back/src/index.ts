//Just testing typescript

interface IUser {
    email: string;
    password: string;
}

enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

interface IAdmin extends IUser {
    role: Role;
}

const admin: IAdmin = {
    email: 'luis@gmail.com',
    password: '123',
    role: Role.ADMIN
}

const user: IUser = {
    email: 'luis@gmail.com',
    password: '123'
}

console.log(user);
console.log(admin);