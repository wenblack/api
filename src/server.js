const { request, response } = require("express");
const express  = require ("express");

const app = express();
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
//Query params 
app.post ("/users", (request,response)=>{

  response.send(`You made a POST`)
})

//port to listen
const PORT = 333;

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));
