import { Router } from "express";
import Job from "../models/Job";

const router = Router();

router.get("/", (_req, res) => {
  Job.findAll()
    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/", (req, res) => {
  const { title, salary, email, company, description, is_new } = req.body;

  Job.create({ title, salary, email, company, is_new, description })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
    });
});

export default router;
