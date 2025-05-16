// Importing modules
import {PORT} from "./config/envs";
import app from "./server";

// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});