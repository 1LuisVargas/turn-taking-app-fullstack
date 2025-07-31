import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoggedInProvider } from "./context/LoggedIn.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoggedInProvider>
        <App />
      </LoggedInProvider>
    </BrowserRouter>
  </StrictMode>
);
