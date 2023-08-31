import express from "express";

import professionalsController from "../controllers/professionalsController.js"

const router = express.Router();

router
  .get("/professionals", professionalsController.listarProfessionals);

export default router;