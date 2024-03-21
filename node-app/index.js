import Express from "express";
import dotenv from "dotenv";

// routes imports
import userRoutes from "./routes/userRoutes.js";
import fromDataRoutes from "./routes/formDataRoutes.js";
import dataTableRoutes from "./routes/dataTableRoutes.js";
import uiRoutes from "./routes/uiRoutes.js";
import rolesRoutes from "./routes/roles-rotues.js";
import privilegeRoutes from "./routes/privieges-routes.js";
import path from "path";
import cookieParser from "cookie-parser";
import errorController from "./middlewares/error-controller.js";
import ErrorHandler from "./utils/error-handler.js";
import { dbConnect } from "./DB/dbConnect.js";
import cors from "cors";
const app = Express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://vite-dash-two.vercel.app"],
  })
);
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());
// dotenv path
dotenv.config();

//  Routes
app.use("/api/user", userRoutes);
app.use("/api/role", rolesRoutes);
app.use("/api/privilege", privilegeRoutes);
app.use("/api/data/form", fromDataRoutes);
app.use("/api/data/table", dataTableRoutes);
app.use("/api/ui", uiRoutes);
app.get("*", (req, res, next) => {
  next(new ErrorHandler(" Route not Found", 404));
});

// middlewares
app.use(errorController);

// db connection

dbConnect();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(" server is running ");
  console.log(`http://localhost:${port}/`);
});
