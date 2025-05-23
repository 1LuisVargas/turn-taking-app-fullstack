// Importing modules
import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata";

// Starting the server
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
