import mongoose from "mongoose";

import uniqueValidator from 'mongoose-unique-validator';

import bcrypt from 'bcryptjs';

const professionalSchema = new mongoose.Schema({

    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    endereco: {type: String, required: true},
    
});

professionalSchema.plugin(uniqueValidator);

professionalSchema.pre('save', async function() {
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

const professionals = mongoose.model('professionals', professionalSchema);



export default professionals;