import express from "express";

import professionalsController from "../controllers/professionalsController.js"

const router = express.Router();

router
  .get("/professionals", professionalsController.listarProfessionals)
  .get("/professionals/:id", professionalsController.listarProfessionalPorId)
  .post("/professionals", professionalsController.cadastrarProfessional)
  .post("/auth/login/", professionalsController.loginProfessional)
  .put("/professionals/:id", professionalsController.atualizarProfessional)
  .delete("/professionals/:id", professionalsController.excluirProfessional)

export default router;