//Created new appointment interface
interface ICreateAppointmentDTO {
    date: string; //TODO: Change to Date once using postgres
    time: string;
    userId: number;
} 

export default ICreateAppointmentDTO;