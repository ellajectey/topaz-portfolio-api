
import { Router } from "express";
import { addAchievement } from "../controllers/achievement_controller.js";
import { addExperience } from "../controllers/experience_controller.js";
import { addPost } from "../controllers/post_controller.js";
import { getAchievement } from "../controllers/achievement_controller.js";
import { getPost } from "../controllers/post_controller.js";
import { getExperience } from "../controllers/experience_controller.js";
import { deleteOneAchievement } from "../controllers/achievement_controller.js";
import { deleteOnePost } from "../controllers/post_controller.js";
import { deleteOneExperience } from "../controllers/experience_controller.js";
import { editOneAchievement } from "../controllers/achievement_controller.js";
import { editOneExperience } from "../controllers/experience_controller.js";
import { editOnePost } from "../controllers/post_controller.js";

export const router = Router()

router.post("/add-achievement",addAchievement)
router.get("/get-achievement",getAchievement)
router.delete("/delete-achievement",deleteOneAchievement)
router.patch("/edit-achievement",editOneAchievement)

router.post("/add-experience",addExperience)
router.get("/get-experience",getExperience)
router.delete("/delete-experience",deleteOneExperience)
router.patch("/edit-experience",editOneExperience)


router.post("/add-post",addPost)
router.get("/get-post",getPost)
router.delete("/delete-post",deleteOnePost)
router.patch("/edit-post",editOnePost)







