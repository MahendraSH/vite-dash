import Express from "express";
import cors from "cors";
import dotenv from "dotenv";

// routes imports
import userRoutes from "./routes/userRoutes.js";
import fomrDataRotues from "./routes/formDataRoutes.js";
import dataTableRoutes from "./routes/dataTableRoutes.js";
import uiRoutes from "./routes/uiRoutes.js";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173/", "https://vite-dash-two.vercel.app/"],
  }),
);
// dotenv path

dotenv.config({ path: "./.env" });

// middlewares

//  Routes
app.use("/api/user", userRoutes);
app.use("/api/data/form", fomrDataRotues);
app.use("api/data/table", dataTableRoutes);
app.use("api/ui", uiRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(" server is running ");
  console.log(`http://localhost:${port}/`);
});
