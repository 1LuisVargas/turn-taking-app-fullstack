// Importing modules
import { Request, Response } from "express";
import {
  getAllAppointments,
  getAppointmentByID,
  createAppointment,
  cancelAppointment,
} from "../services/appointmentsService";
import { IAppointment } from "../interfaces/IAppointment";

// Get all appointments
export const getAppointmentsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const appointments: IAppointment[] = await getAllAppointments();
    res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get appointment by ID
export const getAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
    try{
        //const id: number = Number(req.params.id);
        const appointment: IAppointment = await getAppointmentByID(Number(req.params.id));
        res.status(200).json({
            success: true,
            data: appointment,
        });
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Create appointment
export const createAppointmentController = async (
  req: Request,
  res: Response
) => {
    try {
        //const { date, time, userId }: ICreateAppointmentDTO = req.body;
        const appointment: IAppointment = await createAppointment(req.body);
        res.status(201).json({
            success: true,
            data: appointment,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Cancel appointment
export const CancelAppointmentController = async (
  req: Request,
  res: Response
) => {
    try {
        //const id: number = Number(req.params.id);
        const appointmentID: number = await cancelAppointment(Number(req.params.id));
        res.status(201).json({
            success: true,
            data: appointmentID,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}