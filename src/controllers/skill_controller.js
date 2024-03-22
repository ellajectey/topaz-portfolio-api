import express from "express";
import { skillModel } from "../models/skills.js";

export const addSkill = async (req,res) =>{
try {
    const data = req.body
    const addData = await skillModel.create(data)
    res.send(addData)

    console.log(data)
    res.send("skill added")

}
catch (error) {
    console.log(error)
}

}