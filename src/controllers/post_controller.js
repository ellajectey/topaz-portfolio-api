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