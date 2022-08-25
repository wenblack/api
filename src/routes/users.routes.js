const { Router, request } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();
/*Middleware Example
function myFirsMiddleware(result, response, next) {
  console.log("This is the return of middleware!");

  if(!request.body.isAdmin){
    return response.json({ message: "User unauthorized"});
  } 
  
  next();

}
*/

const usersController = new UsersController();
//Query params 
userRoutes.post("/", usersController.create);
userRoutes.put("/:id", usersController.update);


module.exports = userRoutes;