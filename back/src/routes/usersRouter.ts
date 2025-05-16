// Importing modules
import { Router } from "express";
import {
  getUsersController,
  getUserByIdController,
  registerUserController,
  loginUserController,
} from "../controllers/usersController";

const usersRouter: Router = Router();

// Routes
usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", registerUserController);
usersRouter.post("/login", loginUserController);

export default usersRouter;
