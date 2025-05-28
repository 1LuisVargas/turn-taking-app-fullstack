// Importing modules
import ICreateAppointmentDTO from "../dtos/createAppointmentDTO";
import Appointment from "../entities/Appointment";
import { appointmentStatus } from "../entities/Appointment";
import { appointmentRepository } from "../config/data-source";
import { getUserByID } from "./usersService";
import User from "../entities/User";

// Getting all appointments service
export const getAllAppointments = async () : Promise<Appointment[]> => {
    return await appointmentRepository.find();
};

// Getting a specific appointment by ID service
export const getAppointmentByID = async (id: number) : Promise<Appointment> => {
    const appointmentFound : Appointment | null = await appointmentRepository.findOneBy({id});

    //If the appointment is found, return the appointment, else throw an error
    if (appointmentFound) {
        return appointmentFound;
    }
    else{
        throw new Error("Appointment not found");
    }
};

// Creating a new appointment service
export const createAppointment = async (appointment: ICreateAppointmentDTO) : Promise<Appointment> => {
    // Checking if the user exists
    const foundUser : User | undefined = await getUserByID(appointment.userId);

    // Creating the new appointment. Appointment status has been set to active by default
    const newAppointment: Appointment = await appointmentRepository.create({
        date: appointment.date,
        time: appointment.time,
        user: foundUser //Passing the entire user object to the appointment
    })
    
    // Saving the new appointment to the DB
    await appointmentRepository.save(newAppointment);
    return newAppointment;
};

// Canceling an appointment service
 export const cancelAppointment = async (id:number) : Promise<Appointment["id"]> => {
    // Checking if the appointment exists
    const foundAppointment : Appointment | undefined = await getAppointmentByID(id);
    //If the appointment is already cancelled throw an error, else set the status to cancelled
    if (foundAppointment.status === appointmentStatus.CANCELLED) {
        throw new Error("Appointment already cancelled");
    }
    else if (foundAppointment) {
        foundAppointment.status = appointmentStatus.CANCELLED;
        await appointmentRepository.save(foundAppointment);
    }
    return foundAppointment.id;
}