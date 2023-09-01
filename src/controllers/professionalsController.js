import professionals from "../models/Professional.js";

class ProfessionalController {
  static listarProfessionals = async (req, res) => {
    try {
      const professionalsRes = await professionals.find();
      res.status(200).json(professionalsRes);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarProfessionalPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const professional = await professionals.findById(id);
      res.status(200).send(professional);
    } catch (err) {
      res.status(400).send({
        message: `${err.message} - Id do professional não localizado.`,
      });
    }
  };

  static cadastrarProfessional = async (req, res) => {
    try {
      let professional = new professionals(req.body);
      const { email } = req.body;
      const userExists = await professionals.findOne({ email: email });
      if (userExists) {
        return res
          .status(422)
          .json({ msg: "Por favor, utilize outro e-mail!" });
      } else {
        await professional.save();
        res.status(201).send(professional.toJSON());
      }
    } catch (err) {
      res.status(501).send({ message: ` erro ao cadastrar professional` });
    }
  };

  static atualizarProfessional = async (req, res) => {
    const id = req.params.id;

    try {
      await professionals.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Professional atualizado com sucesso" });
    } catch (err) {
      res.status(501).send({ message: ` erro ao atualizar professional` });
    }
  };

  static excluirProfessional = async (req, res) => {
    const id = req.params.id;

    try {
      await professionals.findByIdAndDelete(id);
      res.status(200).send({ message: "Professional removido com sucesso" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default ProfessionalController;
