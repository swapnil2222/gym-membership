import cors from "cors";
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// middleware goes here

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// API routes goes here
app.use("/api/users", userRoutes);
app.use(errorHandler);

export { app };
