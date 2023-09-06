import companies from "../models/Company.js";

import jwt from "jsonwebtoken";

import 'dotenv/config';

import bcrypt from 'bcryptjs';

class CompanyController {
  static listarCompanies = async (req, res) => {
    try {
      const companiesRes = await companies.find();
      res.status(200).json(companiesRes);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarCompanyPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const Company = await companies.findById(id);
      res.status(200).send(Company);
    } catch (err) {
      res
        .status(400)
        .send({
          message: `${err.message} - Id do Company não localizado.`,
        });
    }
  };

  static cadastrarCompany = async (req, res) => {
    try {
      let Company = new companies(req.body);
      const { email } = req.body;
      const userExists = await companies.findOne({ email: email });
     
      res.status(201).send(Company.toJSON());
      if (userExists) {
        return res
          .status(422)
          .json({ msg: "Por favor, utilize outro e-mail!" });
      } else {
        await Company.save();
        res.status(201).send(companies.toJSON());
      }
    } catch (err) {
      res.status(501).send({ message: ` erro ao cadastrar Company` });
    }
  };


  static loginCompany = async (req, res) => {
    try {
      let company = new companies(req.body);
      const { email, password } = req.body;
      const user = await companies.findOne({ email: email });
      if (!user) {
        res.status(404).json({ msg: "Usuário não encontrado!" });
      } else {
        const checkPassword = await bcrypt.compare(password, user.password);
     
        if (!checkPassword) {
          res.status(422).json({ msg: "Senha inválida" });
        } else {
          const secret = process.env.SECRET;
          const name = user.name;
          const type = "company"

          const token = jwt.sign(
            {
              id: user._id,
            },
            secret
          );
          
          res
            .status(200)
            .json({ msg: "Autenticação realizada com sucesso!", token, email, name, type});
        }
        
       
      }
    } catch (err) {
      res.status(501).send({ message: ` Erro de autenticação` });
    }
  };

  static atualizarCompany = async (req, res) => {
    const id = req.params.id;

    try {
      await companies.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Company atualizado com sucesso" });
    } catch (err) {
      res.status(501).send({ message: ` erro ao atualizar Company` });
    }
  };

  static excluirCompany = async (req, res) => {
    const id = req.params.id;

    try {
      await companies.findByIdAndDelete(id);
      res.status(200).send({ message: "Company removido com sucesso" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default CompanyController;
