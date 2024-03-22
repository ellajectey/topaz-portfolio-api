import express from "express";
import { achievementModel } from "../models/achievements.js";

export const addAchievement = async (req,res) =>{
try {
    const data = req.body
    const addData = await achievementModel.create(data)
    res.send(addData)

    console.log(data)
    res.send("achievement has been added")

}
catch (error) {
    console.log(error)
}

}