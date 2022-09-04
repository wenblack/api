const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRouter = Router();


const tagsController = new TagsController();
//Query params 
tagsRouter.get("/:user_id", tagsController.index);


module.exports = tagsRouter;