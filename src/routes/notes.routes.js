const { Router, request } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();
/*Middleware Example
function myFirsMiddleware(result, response, next) {
  console.log("This is the return of middleware!");

  if(!request.body.isAdmin){
    return response.json({ message: "User unauthorized"});
  } 
  
  next();

}
*/

const notesController = new NotesController();
//Query params 
notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;