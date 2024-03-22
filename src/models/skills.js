import mongoose from "mongoose";


const schema = mongoose.Schema

const SkillSchema =new schema ({

    skill: {type: String, required: true},
    description: {type:String, required: true},
    image:{
        certification:{type:String},
        description:{type:String}
    }



})
export const skillModel = mongoose.model("Skill", SkillSchema)