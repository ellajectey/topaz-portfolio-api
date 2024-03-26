import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {router} from '../routes/allroutes.js'


dotenv.config();

const app = express();

app.use(express.json());


const mongoUri = process.env.MONGO_URI;

try {
    await mongoose.connect(mongoUri)
    console.log("database is connected")
} catch (error) {
    
    console.log(error)
}

app.use(router);

const port = process.env.PORT || 8080

app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
 
});