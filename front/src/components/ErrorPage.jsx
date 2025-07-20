import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            navigate("/");
        }, 5000);

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Redirecting in {timer} seconds...</p>
        </div>
    );
}

export default ErrorPage;