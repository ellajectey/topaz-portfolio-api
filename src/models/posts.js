import mongoose from "mongoose";


const schema = mongoose.Schema

const PostSchema =new schema ({

    image: {type: String, required: true},
    title: {type:String, required: true},
    description: {type:String, required: true}
   


})
export const postModel = mongoose.model("Post", PostSchema)