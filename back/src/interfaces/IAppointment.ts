// Created new data type
type status = "active" | "cancelled";

// Created new appointment interface
interface IAppointment {
    id: number;
    date: Date;
    time: string;
    userId: number;
    status: status;
  }
  
export const appointments: IAppointment[] = [
    {
      id: 1,
      date: new Date(),
      time: "10:00",
      userId: 1,
      status: "active"
    },
    {
      id: 2,
      date: new Date(),
      time: "11:00",
      userId: 1,
      status: "active"
    },
    {
      id: 3,
      date: new Date(),
      time: "12:00",
      userId: 1,
      status: "active"
    }
  ];

  export default IAppointment;