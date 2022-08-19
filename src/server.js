//Import Async Errors
require("express-async-errors");
const AppError = require("./utils/AppError");
//import Express
const express = require("express");
//Routes of application:
const routes = require("./routes");
//Using express
const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next)=>{
  if( error instanceof AppError){
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  console.error(error);

  return response.status(500).json({
    status:'error',
    message: 'Internal Server Error',
  })
})
/* Request Example:                                                                
app.get("/:id/:user", (request,response)=>{
  
  const {id , user } = request.params
  
  response.send(`
  Message: ${id}
  For the User: ${user}
  `
  )
});*/
/*Root route
app.get("/", (request,response)=>{
  response.send('Hello World')
});*/

//port to listen
const PORT = 333;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
