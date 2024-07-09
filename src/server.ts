import express, { Application } from "express";
import formRouter from "./routes/formRoute";
import { middlewares } from "./middleware/middlewares";
import path from "path";

const app: Application = express();
const port: number = 3000;
middlewares(app, path.join(__dirname, "../public"));

// Mount the formRouter under /form route
app.use("/api", formRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});