import cors from "cors";
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import gymRoutes from "./routes/gymRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import memberShipRoutes from "./routes/memberShipRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// middleware goes here

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// API routes goes here
app.use("/api/users", userRoutes);
app.use("/api/gyms", gymRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/memberships", memberShipRoutes);

app.use(errorHandler);

export { app };
