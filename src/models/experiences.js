import mongoose from "mongoose";


const schema = mongoose.Schema

const ExperienceSchema =new schema ({

    startdate: {type: String, required: true},
    enddate: {type:String, required: true},
    description: {type:String, required: true}
   


})
export const experienceModel = mongoose.model("Experience", ExperienceSchema)