import { Request, Response } from "express";

// GET
export const getAppointmentsController = (_req: Request, res: Response) => {
    res.status(200).send("Get all the appointments from all users");
};
export const getAppointmentByIdController = (_req: Request, res: Response) => {
    res.status(200).send("Get the details for one specific appointment");
};

// POST
export const createAppointmentController = (_req: Request, res: Response) => {
    res.status(201).send("Schedule a new appointment");
};

// PUT
export const CancelAppointmentController = (_req: Request, res: Response) => {
    res.status(201).send("Cancel an appointment");
};