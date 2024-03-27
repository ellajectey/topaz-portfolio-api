import mongoose from "mongoose";


const schema = mongoose.Schema

const AchievementSchema =new schema ({

    image: {type: String,default: null},
    title: {type: String,required: true},
    date: {type: Date,required: true},
    description: {type: String,default: null},
    createdAt: {type: Date, default: Date.now}


});
export const achievementModel = mongoose.model("Achievement", AchievementSchema)