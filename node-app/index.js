import Express from "express";
import dotenv from "dotenv";

// routes imports
import userRoutes from "./routes/userRoutes.js";
import fromDataRoutes from "./routes/formDataRoutes.js";
import dataTableRoutes from "./routes/dataTableRoutes.js";
import uiRoutes from "./routes/uiRoutes.js";
import path from "path";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// dotenv path


// middlewares

//  Routes
app.use("/api/user", userRoutes);
app.use("/api/data/form", fromDataRoutes);
app.use("api/data/table", dataTableRoutes);
app.use("api/ui", uiRoutes);
// Serve static files from the 'dist' directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(Express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// console.log(path.dirname)

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(" server is running ");
  console.log(`http://localhost:${port}/`);
});
