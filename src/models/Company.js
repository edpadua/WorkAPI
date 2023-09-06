import mongoose from "mongoose";

import uniqueValidator from 'mongoose-unique-validator';

import bcrypt from 'bcryptjs';

const companySchema = new mongoose.Schema({

    id: {type: String},
    name: {type: String, required: true},
    cnpj: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    enderecos: [{type: String, required: true}],
    
});


companySchema.plugin(uniqueValidator);

companySchema.pre('save', async function() {
    return new Promise( async (resolve, reject) => {
        await bcrypt.genSalt(10, async (err, salt) => {
            await bcrypt.hash(this.password, salt, async (err, hash) => {
                if(err) {
                    reject (err)
                } else {
                    resolve (this.password = hash)
                }
            });
        });
    })
})

const companies = mongoose.model('companies', companySchema);

export default companies;