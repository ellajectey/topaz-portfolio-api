import mongoose from "mongoose";


const schema = mongoose.Schema

const PostSchema =new schema ({

    image: {type: String,required: true},
    title: {type: String,required: true},
    description: {type: String,required: true},
    date: {type: Date,required: true},
    isPublished: {type: Boolean, default: false},
    url: {type: String, default: null},
    createdAt: {type: Date, default: Date.now}

})
export const postModel = mongoose.model("Post", PostSchema)