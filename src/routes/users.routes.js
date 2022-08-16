const { Router } = require("express");

const UsersController  = require("../controllers/UsersController");

const userRoutes = Router();

const usersController = new UsersController();
//Query params 
userRoutes.post("/", usersController.create);

module.exports = userRoutes;