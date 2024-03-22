import express from "express";
import { experienceModel } from "../models/experiences.js";

export const addExperience = async (req,res) =>{
try {
    const data = req.body
    const addData = await experienceModel.create(data)
    res.send(addData)

    console.log(data)
    res.send("experience has been added")

}
catch (error) {
    console.log(error)
}

}