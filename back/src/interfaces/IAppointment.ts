// Created new enum for status
export enum appointmentStatus {
  active = "active",
  cancelled = "cancelled"
}

// Created new appointment interface
export interface IAppointment {
    id: number;
    date: string; //TODO: change to Date once using postgres
    time: string;
    userId: number;
    status: appointmentStatus;
  }