
import { Router } from "express";
import { addSkill } from "../controllers/skill_controller.js";
import { addAchievement } from "../controllers/achievement_controller.js";
import { addExperience } from "../controllers/experience_controller.js";
import { addPost } from "../controllers/post_controller.js";


export const router = Router()

router.post("/add-achievement",addAchievement)
router.post("/add-experience",addExperience)
router.post("/add-post",addPost)
router.post("/add-skill",addSkill)






