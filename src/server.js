const { request, response } = require("express");
const express  = require ("express");

const app = express();
/*for receive a request use :
Example:                                                                */
app.get("/:id/:user", (request,response)=>{
  
  const {id , user } = request.params
  
  response.send(`
  Message: ${id}
  For the User: ${user}
  `
  )
});
//Root route
app.get("/", (request,response)=>{
  response.send('Hello World')
});
//Query params 
app.get("/users", (request,response)=>{
  const {page, limit} = request.query

  response.send(`Pages: ${page}. Users: ${limit}`)
})

//port to listen
const PORT = 333;

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));
