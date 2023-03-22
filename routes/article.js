const express = require("express");
const router = express.Router();

// Article controller
const articleController = require("../controllers/article")

//get "returns a resource"
router.get("/test-route", articleController.test);

//get "save a resource"
router.post("/create", articleController.create);
router.get("/articles", articleController.listArticles);
router.get("/article/:id", articleController.oneArticle);



module.exports = router;