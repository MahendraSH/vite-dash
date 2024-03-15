import Express from "express";
import dotenv from "dotenv";

// routes imports
import userRoutes from "./routes/userRoutes.js";
import fromDataRoutes from "./routes/formDataRoutes.js";
import dataTableRoutes from "./routes/dataTableRoutes.js";
import uiRoutes from "./routes/uiRoutes.js";

import path from "path";
import cookieParser from "cookie-parser";
import errorController from "./middlewares/error-controller.js";
import ErrorHandler from "./utils/error-handler.js";
import { dbConnect } from "./DB/dbConnect.js";
import cors from "cors";
const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());
// dotenv path
dotenv.config();

// Serve static files from the 'dist' directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(Express.static(path.join(__dirname, "public")));

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

//  Routes
app.use("/api/user", userRoutes);
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
