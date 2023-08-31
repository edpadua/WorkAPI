import positions from "../models/Position.js";

class PositionController {
  static listarPositions = async (req, res) => {
    try {
      const positionsRes = await positions.find();
      res.status(200).json(positionsRes);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarPositionPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const Position = await positions.findById(id);
      res.status(200).send(Position);
    } catch (err) {
      res
        .status(400)
        .send({
          message: `${err.message} - Id do Position não localizado.`,
        });
    }
  };

  static cadastrarPosition = async (req, res) => {
    try {
      let Position = new positions(req.body);
      await Position.save();
      res.status(201).send(Position.toJSON());
    } catch (err) {
      res.status(501).send({ message: ` erro ao cadastrar Position` });
    }
  };

  static atualizarPosition = async (req, res) => {
    const id = req.params.id;

    try {
      await positions.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Position atualizado com sucesso" });
    } catch (err) {
      res.status(501).send({ message: ` erro ao atualizar Position` });
    }
  };

  static excluirPosition = async (req, res) => {
    const id = req.params.id;

    try {
      await positions.findByIdAndDelete(id);
      res.status(200).send({ message: "Position removido com sucesso" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default PositionController;
