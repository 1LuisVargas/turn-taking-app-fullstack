import { Request, Response } from "express";
import { getAllAppointments, getAppointmentByID, createAppointment, cancelAppointment } from "../services/appointmentsService";

// GET
export const getAppointmentsController = async (_req: Request, res: Response) => {
    getAllAppointments(_req, res);
};
export const getAppointmentByIdController = async (_req: Request, res: Response) => {
    getAppointmentByID(_req, res);
};

// POST
export const createAppointmentController = async (_req: Request, res: Response) => {
    createAppointment(_req, res);
};

// PUT
export const CancelAppointmentController = async (_req: Request, res: Response) => {
    cancelAppointment(_req, res);
};