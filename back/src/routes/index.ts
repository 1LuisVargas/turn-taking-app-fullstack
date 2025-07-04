import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";
import cors from 'cors';

const router: Router = Router();
router.use("/users", usersRouter);
router.use("/appointments", appointmentsRouter);
router.use(cors());

export default router;