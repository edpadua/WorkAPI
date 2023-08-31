import professionals from "../models/Professional.js"


class ProfessionalController {
    static listarProfessionals = async (req, res) => {
        try {
            const professionalsRes = await professionals.find();
            res.status(200).json(professionalsRes)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default ProfessionalController