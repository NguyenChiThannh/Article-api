import express from "express"
import ArticleModel from "../app/models/article.js"
import ArticleController from "../app/controllers/ArticleController.js";
const router = express.Router();
 
router.post("/articles", ArticleController.post);

router.get("/articles", ArticleController.index);

router.get("/articles/:id", ArticleController.findOneById);

router.patch("/articles/:id", ArticleController.patch);

router.delete("/articles/:id", ArticleController.delete);
 
export default router;