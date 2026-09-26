import express from "express";
import cors from "cors";

import userRoute from "./api/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/register", userRoute);

app.use((req, res) => {
  res.status(404).json({ error: "page not found!" });
});

export default app;
