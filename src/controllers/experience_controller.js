import express from "express";
import { experienceModel } from "../models/experiences.js";
import { achievementModel } from "../models/achievements.js";

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

export const getExperience = async (req,res) => {
    try {
        
        const getAllExperiences = await experienceModel.find({})
        res.send(getAllExperiences)

        console.log(data)
        res.send("all experiences")

    } catch (error) {
        console.log(error)
    }
}

export const deleteOneExperience = async (req, res) => {
    try {
        // Find the post by ID and delete it
        const deletedExperience = await experienceModel.findByIdAndDelete(req.params.id);

        // Check if the post was found and deleted
        if (!deletedExperience) {
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

export const editOneExperience = async (req, res) => {
    try {
        // Find the post by ID and update it
        const updatedExperience = await experienceModel.findByIdAndUpdate(
            req.params.id,
            req.body, // Use the request body to update the post
            { new: true } // Return the updated post
        );

        // Check if the post was found and updated
        if (!updatedExperience) {
            return res.status(404).json({ message: 'Experience not found' });
        }

        // Send the updated post as response
        res.status(200).json(updatedExperience);
    } catch (error) {
        // Handle errors
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};