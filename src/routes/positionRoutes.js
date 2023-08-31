import express from "express";

import positionsController from "../controllers/positionsController.js"

const router = express.Router();

router
  .get("/positions", positionsController.listarPositions)
  .get("/positions/:id", positionsController.listarPositionPorId)
  .post("/positions", positionsController.cadastrarPosition)
  .put("/positions/:id", positionsController.atualizarPosition)
  .delete("/positions/:id", positionsController.excluirPosition)

export default router;