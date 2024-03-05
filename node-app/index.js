import Express from "express";
import dotenv from "dotenv";

// routes imports
import userRoutes from "./routes/userRoutes.js";
import fomrDataRotues from "./routes/formDataRoutes.js";
import dataTableRoutes from "./routes/dataTableRoutes.js";
import uiRoutes from "./routes/uiRoutes.js";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// dotenv path

dotenv.config({ path: "./.env" });

// middlewares

//  Routes
app.use("/api/user", userRoutes);
app.use("/api/data/form", fomrDataRotues);
app.use("api/data/table", dataTableRoutes);
app.use("api/ui", uiRoutes);
// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "..", "react-app", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "react-app", "dist", "index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(" server is running ");
  console.log(`http://localhost:${port}/`);
});
