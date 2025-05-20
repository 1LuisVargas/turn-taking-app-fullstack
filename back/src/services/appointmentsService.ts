// Importing modules
import ICreateAppointmentDTO from "../dtos/createAppointmentDTO";
import { IAppointment, appointmentStatus } from "../interfaces/IAppointment";

// Created a fake DB for appointments
const appointmentsDB: IAppointment[] = [];
let appointmentId: number = 1;

// Getting all appointments service
export const getAllAppointments = async () : Promise<IAppointment[]> => {
    return appointmentsDB;
};

// Getting a specific appointment by ID service
export const getAppointmentByID = async (id: number) : Promise<IAppointment> => {
    const appointmentFound : IAppointment | undefined = appointmentsDB.find((appointment: IAppointment) => appointment.id === id);
    //If the appointment is found, return the appointment, else throw an error
    if (appointmentFound) {
        return appointmentFound;
    }
    else{
        throw new Error("Appointment not found");
    }
};

// Creating a new appointment service
export const createAppointment = async (appointment: ICreateAppointmentDTO) : Promise<IAppointment> => {
    // Creating the new appointment
    const newAppointment: IAppointment = {
        id: appointmentId,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status: appointmentStatus.active // By default, the status is active
    }
    // Pushing the new appointment to the DB and incrementing the appointment ID
    appointmentsDB.push(newAppointment);
    appointmentId++;
    return newAppointment;
};

// Canceling an appointment service
 export const cancelAppointment = async (id:number) : Promise<IAppointment["id"]> => {
    // Checking if the appointment exists
    const foundAppointment : IAppointment | undefined = await getAppointmentByID(id);
    //If the appointment is already cancelled throw an error, else set the status to cancelled
    if (foundAppointment.status === appointmentStatus.cancelled) {
        throw new Error("Appointment already cancelled");
    }
    else if (foundAppointment) {
        foundAppointment.status = appointmentStatus.cancelled;
    }
    return foundAppointment.id;
}