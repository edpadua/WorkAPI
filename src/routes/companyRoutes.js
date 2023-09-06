import express from "express";

import companiesController from "../controllers/companiesController.js"

const router = express.Router();

router
  .get("/companies", companiesController.listarCompanies)
  .get("/companies/:id", companiesController.listarCompanyPorId)
  .post("/companies", companiesController.cadastrarEmpresa)
  .post("/auth/login_company/", companiesController.loginCompany)
  .put("/companies/:id", companiesController.atualizarCompany)
  .delete("/companies/:id", companiesController.excluirCompany)

export default router;