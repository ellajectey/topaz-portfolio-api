import mongoose from "mongoose";


const schema = mongoose.Schema

const AchievementSchema =new schema ({

    startdate: {type: String, required: true},
    enddate: {type:String, required: true},
    description: {type:String, required: true},
    image:{
        certification:{type:String},
        description:{type:String}
    }



})
export const achievementModel = mongoose.model("Achievement", AchievementSchema)