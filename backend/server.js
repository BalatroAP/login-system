import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use((req, res) => {
  res.status(404).json({ error: "page not found!" });
});

export default app;
