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
notesRoutes.post("/:user_id", notesController.create);


module.exports = notesRoutes;