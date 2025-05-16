// Importing modules
import { Request, Response } from "express";

// GET
export const getUsersController = (_req: Request, res: Response) => {
  res.status(200).send("Get the list of all users");
};
export const getUserByIdController = (_req: Request, res: Response) => {
  res.status(200).send("Get the details for one specific user");
};

// POST
export const registerUserController = (_req: Request, res: Response) => {
  res.status(201).send("Register a new user");
};
export const loginUserController = (_req: Request, res: Response) => {
  res.status(204).send("Login a user");
};
