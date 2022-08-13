const express  = require ("express");

const app = express();
/*for receive a request use :
Example:                                                                */
app.get("/:id/:user", (request,response)=>{
  
  const {id , user } = request.params
  
  response.send(`
  Message: ${id}
  For the user: ${user}
  `
  )
});
//Root route
app.get("/", (request,response)=>{
  response.send('Hello World')
});
//port to listen
const PORT = 333;

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));
