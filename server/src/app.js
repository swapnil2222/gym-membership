import express from "express";

import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(errorHandler);

export { app };
