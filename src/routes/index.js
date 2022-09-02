const {Router} = require("express");

//Routes
const notesRoutes = require("./notes.routes");
const userRouter = require("./users.routes");

//Start Router
const routes = Router();
//Using routes
routes.use("/users", userRouter);
routes.use("/notes", notesRoutes);

module.exports = routes;