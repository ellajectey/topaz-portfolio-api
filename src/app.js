import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {router} from './routes/allroutes.js'
import { handleRequests, init, handleResponses } from "express-oas-generator";
// import cors from "cors";

dotenv.config();

const modelNames = mongoose.modelNames();

const app = express();
handleResponses(app);


app.use(express.json());

app.use(router);

// app.use(cors());

// app.use(cors({
//   origin: '*', // Change this to your allowed origins if needed
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Include the HTTP methods your API supports
//   allowedHeaders: ['Content-Type'] // Allow Content-Type header
// }));

const mongoUri = process.env.MONGO_URI;

try {
    await mongoose.connect(mongoUri)
    console.log("database is connected")
} catch (error) {
    
    console.log(error)
}



const port = process.env.PORT || 8080

app.listen(port, () =>{
    init(
        app,
        (spec) => {
          spec.info = {
            title: "Topaz Portfolio API Documentation",
            description: "API Documentation for Topaz Portfolio website",
          };
          spec.host = "topaz-portfolio-api.onrender.com";
          spec.schemes = ["http", "https"];
    
          
          return spec;
        },
        "/swagger.json",
        60 * 1000,
        "api-docs",
        modelNames,
        ["users"],
        ["develop"],

        true
      );
    
      console.log(
        'Server Listening on  8000, Open http://localhost:8000/api-docs/'
      );
    });
    
    app.use(router);

    console.log(`Express server is running on ${port}`);

     
    handleRequests();
