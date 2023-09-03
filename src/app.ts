import express, { json } from "express";
import db from "./db/connection";
import jobRoutes from "./routes/jobs";

const app = express();

app.use(json());

db.authenticate()
  .then(() => {
    console.log("Connected successfully to database");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/ok", (_req, res) => {
  res.status(200).json({ message: "OK" });
});

app.use("/jobs", jobRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
