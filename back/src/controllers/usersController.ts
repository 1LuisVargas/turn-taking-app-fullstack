// Importing modules
import { Request, Response } from "express";
import { getUsers, getUserByID, createUser } from "../services/usersService";
import { checkCredentials } from "../services/credentialsService";
import User from "../entities/User";

// GET

// Get all users
export const getUsersController = async (_req: Request, res: Response) => {
  try {
    const users: User[] = await getUsers();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get user by ID
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user: User = await getUserByID(Number(req.params.id));
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Create user
export const registerUserController = async (req: Request, res: Response) => {
  try {
    const newUser: User = await createUser(req.body);
    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Login user
export const loginUserController = async (req: Request, res: Response) => {
  try {
    const credentialId: number = await checkCredentials(
      req.body.username,
      req.body.password
    );
    res.status(200).json({
      success: true,
      data: credentialId,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
