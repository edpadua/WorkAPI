import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({

    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    endereco: {type: String, required: true},
    
});

const professionals = mongoose.model('professionals', professionalSchema);

export default professionals;