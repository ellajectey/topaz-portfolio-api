import {handleRequests, init, handleResponses} from 'express';

import express from "express";
import dotenv from "dotenv";
import {router} from '../routes/allroutes.js'
import mongoose from 'mongoose';


dotenv.config();

const port = process.env.PORT || 8080
const modelNames=mongoose.modelNames();

const app =express();
handleResponses(app, {});

app.use(express.json());


init(
    app,
    function(spec) { return spec; },
    '/swagger.json',
    60 * 1000,
    'api-docs',
    modelNames,
    ['users', 'skills'],
    ['production'],
    true,
 
  )



app.use(router);
handleRequests();

app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
 
});

