"use strict";
//Just testing typescript
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
})(Role || (Role = {}));
const admin = {
    email: 'luis@gmail.com',
    password: '123',
    role: Role.ADMIN
};
const user = {
    email: 'luis@gmail.com',
    password: '123'
};
console.log(user);
console.log(admin);
