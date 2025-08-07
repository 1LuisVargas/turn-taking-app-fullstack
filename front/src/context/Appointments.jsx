import { createContext, useState } from "react";

export const AppointmentsContext = createContext({
    appointments: [],
    setAppointments: () => {},
});

export const AppointmentsProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([]);

    const value = {
        appointments,
        setAppointments,
    };

    return (
        <AppointmentsContext.Provider value={value}>
            {children}
        </AppointmentsContext.Provider>
    );
};