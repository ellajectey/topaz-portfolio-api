import express from "express";
import { achievementModel } from "../models/achievements.js";

const app = express();

// Parse application/json
app.use(express.json());

export const addAchievement = async (req,res) =>{
try {
    const data = req.body
    console.log('request: ', req.body);

    const addData = await achievementModel.create(data)
    res.send(addData)

    console.log(data);
    res.send("achievement has been added")

}
catch (error) {
    console.log(error)
}

}

export const getAchievement = async (req,res) => {
    try {
        
        const getAllAchievements = await achievementModel.find({})
        res.send(getAllAchievements)

        console.log(data)
        res.send("all achievements")

    } catch (error) {
        console.log(error)
    }
}

export const deleteOneAchievement = async (req, res) => {
    try {
        // Find the post by ID and delete it
        const deletedAchievement = await achievementModel.findByIdAndDelete(req.params.id);

        // Check if the post was found and deleted
        if (!deletedAchievement) {
            return res.status(404).json({ message: 'Experience not found' });
        }

        // Send a success response
        res.status(200).json({ message: 'Experience deleted successfully' });
    } catch (error) {
        // Handle errors
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const editOneAchievement = async (req, res) => {
    try {
        // Find the post by ID and update it
        const updatedAchievement = await achievementModel.findByIdAndUpdate(
            req.params.id,
            req.body, // Use the request body to update the post
            { new: true } // Return the updated post
        );

        // Check if the post was found and updated
        if (!updatedAchievement) {
            return res.status(404).json({ message: 'Achievement not found' });
        }

        // Send the updated post as response
        res.status(200).json(updatedAchievement);
    } catch (error) {
        // Handle errors
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};