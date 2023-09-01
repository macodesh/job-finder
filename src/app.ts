import express from "express";
import db from "./db/connection";

const app = express();

db.authenticate()
  .then(() => {
    console.log("Connected successfully to database");
  })
  .catch((err) => {
    console.error(err.stack);
  });

app.get("/ok", (_req, res) => {
  res.status(200).json({ message: "OK" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
