const {Router} = require("express");

//Routes
const notesRoutes = require("./notes.routes");
const userRouter = require("./users.routes");
const tagsRouter = require ( "./tags.routes")

//Start Router
const routes = Router();
//Using routes
routes.use("/users", userRouter);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRouter);


module.exports = routes;