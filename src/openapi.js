import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { handleRequests, init, handleResponses } from "express-oas-generator";
import { router } from "./routes/allroutes.js";
//const expressOasGenerator = require('express-oas-generator');

dotenv.config();

const modelNames = mongoose.modelNames();

const app = express();
handleResponses(app);

app.use(express.json());
app.use(cors());

handleResponses(app);
app.listen(8000, () => {
  init(
    app,
    (spec) => {
      spec.info = {
        title: "Topaz Portfolio API Documentation",
        description: "API Documentation for Topaz Portfolio website",
      };
      spec.host = "localhost:4000";
      spec.schemes = ["http", "https"];

      console.log('lll', spec)
      return spec;
    },
    "./swagger.json",
    60 * 1000,
    "api-docs",
    modelNames,
    ["users"],
    ["production"],
    true
  );

  console.log(
    'Server Listening on  8000, Open http://localhost:8000/api-docs/'
  );
});

app.use(router);

handleRequests();