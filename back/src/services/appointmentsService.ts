// Importing modules
import { Request, Response } from "express";
import { IAppointment, appointmentStatus } from "../interfaces/IAppointment";

export const getAllAppointments = async (_req: Request, res: Response) => {
    const allAppointments: IAppointment[] = appointments;
    return res.status(200).send(allAppointments);
};

export const getAppointmentByID = async (_req: Request, res: Response) => {
    // Created a fake ID
    const requestedID: number = 2;
    const appointment = appointments.find((appointment: IAppointment) => appointment.id === requestedID);
    if (appointment) {
        return res.status(200).send(appointment);
    }
    else{
        throw new Error("Appointment not found");
    }
};

export const createAppointment = async (_req: Request, res: Response) => {
    // Created a fake ID
    const requesterID = 1;
    const appointment: IAppointment = {
        id: 4,
        date: new Date(),
        time: "10:00",
        userId: requesterID,
        status: status.active
    }
    appointments.push(appointment);
    return res.status(201).send(appointment);
};

 export const cancelAppointment = async (_req: Request, res: Response) => {
    // Created a fake ID
    const requesterID = 3;
    const appointment = appointments.find((appointment: IAppointment) => appointment.id === requesterID);
    if (appointment) {
        appointment.status = status.cancelled;
        return res.status(201).send(appointment);
    }
    else{
        throw new Error("Appointment not found");
    }
};