//Created new user interface DTO
interface ICreateUserDTO {
    name: "string",
    email: "string",
    birthdate: "string", //TODO: Change to Date once using postgres
    Dni: "number",
    username: "string",
    password: "string"
}

export default ICreateUserDTO;