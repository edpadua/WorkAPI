import mongoose from "mongoose";

const companySchema = new mongoose.Schema({

    id: {type: String},
    name: {type: String, required: true},
    cnpj: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    enderecos: [{type: String, required: true}],
    
});

const companies = mongoose.model('companies', companySchema);

export default companies;