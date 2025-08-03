// Importing modules
import { Router } from "express";
import {
  getAppointmentsController,
  getAppointmentByIdController,
  createAppointmentController,
  CancelAppointmentController,
  getAppointmentsByUserController,
} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

// Routes
appointmentsRouter.get("/", getAppointmentsController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.get("/user/:id", getAppointmentsByUserController);
appointmentsRouter.post("/schedule", createAppointmentController);
appointmentsRouter.put("/cancel/:id", CancelAppointmentController);

export default appointmentsRouter;
