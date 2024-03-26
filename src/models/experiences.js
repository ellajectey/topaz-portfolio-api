import mongoose from "mongoose";


const schema = mongoose.Schema

const ExperienceSchema =new schema ({

    institutionName: {type: String,maxlength: 100},
    position: {type: String,maxlength: 100},
    startDate: {type: Date,required: true},
    endDate: {type: Date, default: null},
    description: { type: String},
    location: {type: String, default: null},
    createdAt: {type: Date, default: Date.now}
   


});
export const experienceModel = mongoose.model("Experience", ExperienceSchema)