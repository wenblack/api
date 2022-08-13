const express  = require ("express");

const app = express();
/*for receive a request use :
Example:                                                                */
app.get("/:id", (request,response)=>{
  response.send(`yor id ${request.params.id}`)
});
//Root route
app.get("/", (request,response)=>{
  response.send('Hello World')
});
//port to listen
const PORT = 333;

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));
