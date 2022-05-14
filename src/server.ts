import express from "express";
import { userRoutes } from "../routes/user.routes";

const app = express();

app.listen(3000, () => console.log("🚀 Server is running on PORT 3000"));

app.use(express.json());

app.use(userRoutes);
