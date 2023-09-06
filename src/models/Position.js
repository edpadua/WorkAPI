import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({

    id: {type: String},
    id_company: {type: String, required: true},
    endereco: {type: String, required: true},
    departamento: {type: String, required: true},
    sala: {type: String, required: true},
    mesa: {type: String, required: true},
    agenda: [{data: String, status: String, ocupante: String}],
    datasAgendadas: [{startDate: String, endDate: String}]
});

const positions = mongoose.model('positions', positionSchema);

export default positions;