import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import AccountRoute from './route/AccountRoute.js';

const app = express();

try{
    mongoose.connect("mongodb+srv://green:c5d35a@cluster0.os8fl.mongodb.net/react-pos");
    const db = mongoose.connection;
    // db.on('error',(error) => console.log(error));
    // db.once('open', () => console.log('Database connected....!'))
    console.log("database is connected");
}catch(err){
    console.log("errror: " + err);
}

app.use(cors());
app.use(express.json());
app.use(AccountRoute);

app.listen(5000, () => {
    console.log('server is running at server 5000');
})