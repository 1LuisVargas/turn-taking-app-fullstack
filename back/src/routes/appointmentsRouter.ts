// Importing modules
import { Router } from "express";
import {
  getAppointmentsController,
  getAppointmentByIdController,
  createAppointmentController,
  CancelAppointmentController,
} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

// Routes
appointmentsRouter.get("/", getAppointmentsController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.post("/schedule", createAppointmentController);
appointmentsRouter.put("/cancel/:id", CancelAppointmentController);

export default appointmentsRouter;
