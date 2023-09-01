import mongoose from "mongoose"

import 'dotenv/config'

const password=process.env.DB_PASSWORD;

console.log("password",password);

mongoose.connect(`mongodb+srv://edpadua:${password}@cluster0.5du6kwb.mongodb.net/?retryWrites=true&w=majority`);

let db = mongoose.connection;

export default db;