import express from "express";
import { postModel } from "../models/posts.js";


export const addPost = async (req,res) =>{
try {
    const data = req.body
    const addData = await postModel.create(data)
    res.send(addData)

    console.log(data)
    res.send("post is added")

}
catch (error) {
    console.log(error)
}

}

export const getPosts = async (req,res) => {
    try {
        
        const getAllPosts = await postModel.find({})
        res.send(getAllPosts)

        console.log(data)
        res.send("all posts")

    } catch (error) {
        console.log(error)
    }
}
export const deleteOnePost = async (req, res) => {
    try {
        // Find the post by ID and delete it
        const deletedPost = await postModel.findByIdAndDelete(req.params.id);

        // Check if the post was found and deleted
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Send a success response
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        // Handle errors
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const editOnePost = async (req, res) => {
    try {
        // Find the post by ID and update it
        const updatedPost = await postModel.findByIdAndUpdate(
            req.params.id,
            req.body, // Use the request body to update the post
            { new: true } // Return the updated post
        );

        // Check if the post was found and updated
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Send the updated post as response
        res.status(200).json(updatedPost);
    } catch (error) {
        // Handle errors
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
