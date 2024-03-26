import mongoose from "mongoose";


const schema = mongoose.Schema

const AchievementSchema =new schema ({

    image: {type: String,default: null},
    startDate: {type: Date,required: true},
    endDate: {type: Date,default: null},
    description: {type: String,required: true}


});
export const achievementModel = mongoose.model("Achievement", AchievementSchema)